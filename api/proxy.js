import http from 'http';

const BACKEND = '34.176.216.15';
const PORT = 3000;

export default function handler(req, res) {
  const targetPath = '/api' + req.url;

  const options = {
    hostname: BACKEND,
    port: PORT,
    path: targetPath,
    method: req.method,
    headers: { ...req.headers, host: `${BACKEND}:${PORT}` },
  };

  const proxy = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxy.on('error', () => {
    res.status(502).json({ error: 'Backend unreachable' });
  });

  req.pipe(proxy, { end: true });
}

export const config = {
  api: { bodyParser: false },
};
