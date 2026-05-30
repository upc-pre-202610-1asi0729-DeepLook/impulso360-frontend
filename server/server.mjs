import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, isAbsolute, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import { watch } from 'chokidar';
import JSON5 from 'json5';
import { Low } from 'lowdb';
import { DataFile, JSONFile } from 'lowdb/node';
import { App } from '@tinyhttp/app';
import { cors } from '@tinyhttp/cors';
import { Eta } from 'eta';
import { json } from 'milliparsec';
import sirv from 'sirv';
import { NormalizedAdapter } from '../node_modules/json-server/lib/adapters/normalized-adapter.js';
import { Observer } from '../node_modules/json-server/lib/adapters/observer.js';
import { parseWhere } from '../node_modules/json-server/lib/parse-where.js';
import { isItem, Service } from '../node_modules/json-server/lib/service.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env['NODE_ENV'] === 'production';

const eta = new Eta({
    views: join(__dirname, '../views'),
    cache: isProduction,
});

const RESERVED_QUERY_KEYS = new Set(['_sort', '_page', '_per_page', '_embed', '_where']);

function parseListParams(req) {
    const queryString = req.url.split('?')[1] ?? '';
    const params = new URLSearchParams(queryString);
    const filterParams = new URLSearchParams();
    for (const [key, value] of params.entries()) {
        if (!RESERVED_QUERY_KEYS.has(key)) {
            filterParams.append(key, value);
        }
    }
    let where = parseWhere(filterParams.toString());
    const rawWhere = params.get('_where');
    if (typeof rawWhere === 'string') {
        try {
            const parsed = JSON.parse(rawWhere);
            if (typeof parsed === 'object' && parsed !== null) {
                where = parsed;
            }
        } catch {
            // Ignore invalid JSON
        }
    }
    const pageRaw = params.get('_page');
    const perPageRaw = params.get('_per_page');
    const page = pageRaw === null ? undefined : Number.parseInt(pageRaw, 10);
    const perPage = perPageRaw === null ? undefined : Number.parseInt(perPageRaw, 10);
    return {
        where,
        sort: params.get('_sort') ?? undefined,
        page: Number.isNaN(page) ? undefined : page,
        perPage: Number.isNaN(perPage) ? undefined : perPage,
        embed: req.query['_embed'],
    };
}

function withBody(action) {
    return async (req, res, next) => {
        const { name = '' } = req.params;
        if (!isItem(req.body)) {
            res.status(400).json({ error: 'Body must be a JSON object' });
            return;
        }
        res.locals['data'] = await action(name, req.body);
        next?.();
    };
}

function withIdAndBody(action) {
    return async (req, res, next) => {
        const { name = '', id = '' } = req.params;
        if (!isItem(req.body)) {
            res.status(400).json({ error: 'Body must be a JSON object' });
            return;
        }
        res.locals['data'] = await action(name, id, req.body);
        next?.();
    };
}

// --- Parse CLI args ---
function parseArgs() {
    const port = parseInt(process.env['PORT'] ?? '3000', 10);
    const host = process.env['HOST'] ?? 'localhost';
    const file = 'server/db.json';
    if (!existsSync(file)) {
        console.log(chalk.red(`File ${file} not found`));
        process.exit(1);
    }
    return { file, port, host };
}

const { file, port, host } = parseArgs();

// Handle empty file
if (readFileSync(file, 'utf-8').trim() === '') {
    writeFileSync(file, '{}');
}

// Set up database
let adapter;
if (extname(file) === '.json5') {
    adapter = new DataFile(file, {
        parse: JSON5.parse,
        stringify: JSON5.stringify,
    });
} else {
    adapter = new JSONFile(file);
}

const observer = new Observer(new NormalizedAdapter(adapter));
const db = new Low(observer, {});
await db.read();

// --- Create app ---
const service = new Service(db);
const app = new App();

// Static files
app.use(sirv('public', { dev: !isProduction }));

// CORS
app
    .use((req, res, next) => {
        return cors({
            allowedHeaders: req.headers['access-control-request-headers']
                ?.split(',')
                .map((h) => h.trim()),
        })(req, res, next);
    })
    .options('*', cors());

// Body parser with 10 MB limit for base64 cover images
app.use(json({ payloadLimit: 10 * 1024 * 1024 }));

// Routes
app.get('/', (_req, res) => res.send(eta.render('index.html', { data: db.data })));

app.get('/:name', (req, res, next) => {
    const { name = '' } = req.params;
    const { where, sort, page, perPage, embed } = parseListParams(req);
    res.locals['data'] = service.find(name, { where, sort, page, perPage, embed });
    next?.();
});

app.get('/:name/:id', (req, res, next) => {
    const { name = '', id = '' } = req.params;
    res.locals['data'] = service.findById(name, id, req.query);
    next?.();
});

app.post('/:name', withBody(service.create.bind(service)));
app.put('/:name', withBody(service.update.bind(service)));
app.put('/:name/:id', withIdAndBody(service.updateById.bind(service)));
app.patch('/:name', withBody(service.patch.bind(service)));
app.patch('/:name/:id', withIdAndBody(service.patchById.bind(service)));

app.delete('/:name/:id', async (req, res, next) => {
    const { name = '', id = '' } = req.params;
    res.locals['data'] = await service.destroyById(name, id, req.query['_dependent']);
    next?.();
});

app.use('/:name', (req, res) => {
    const { data } = res.locals;
    if (data === undefined) {
        res.status(404).json({ error: 'Not Found' });
    } else {
        if (req.method === 'POST') res.status(201);
        res.json(data);
    }
});

// --- Start ---
function logRoutes(data) {
    console.log(chalk.bold('Endpoints:'));
    if (Object.keys(data).length === 0) {
        console.log(chalk.gray(`No endpoints found, try adding some data to ${file}`));
        return;
    }
    console.log(
        Object.keys(data)
            .map((key) => `${chalk.gray(`http://${host}:${port}/`)}${chalk.blue(key)}`)
            .join('\n')
    );
}

const kaomojis = ['♡⸜(˶˃ ᵕ ˂˶)⸝♡', '♡( ◡‿◡ )', '( ˶ˆ ᗜ ˆ˵ )', '(˶ᵔ ᵕ ᵔ˶)'];
function randomItem(items) {
    const index = Math.floor(Math.random() * items.length);
    return items.at(index) ?? '';
}

app.listen(port, () => {
    console.log([
        chalk.bold(`JSON Server (custom) started on PORT :${port}`),
        chalk.gray('Press CTRL-C to stop'),
        chalk.gray(`Watching ${file}...`),
        '',
        chalk.magenta(randomItem(kaomojis)),
        '',
        chalk.bold('Index:'),
        chalk.gray(`http://localhost:${port}/`),
        '',
        chalk.bold('Static files:'),
        chalk.gray('Serving ./public directory if it exists'),
        '',
    ].join('\n'));
    logRoutes(db.data);
});

// Watch file for changes
if (process.env['NODE_ENV'] !== 'production') {
    let writing = false;
    let hadReadError = false;
    let prevEndpoints = '';
    observer.onWriteStart = () => {
        writing = true;
    };
    observer.onWriteEnd = () => {
        writing = false;
    };
    observer.onReadStart = () => {
        prevEndpoints = JSON.stringify(Object.keys(db.data).sort());
    };
    observer.onReadEnd = (data) => {
        if (data === null) return;
        const nextEndpoints = JSON.stringify(Object.keys(data).sort());
        if (hadReadError || prevEndpoints !== nextEndpoints) {
            console.log();
            logRoutes(data);
        }
        hadReadError = false;
    };
    watch(file).on('change', () => {
        if (!writing) {
            db.read().catch((e) => {
                if (e instanceof SyntaxError) {
                    hadReadError = true;
                    return console.log(chalk.red(['', `Error parsing ${file}`, e.message].join('\n')));
                }
                console.log(e);
            });
        }
    });
}
