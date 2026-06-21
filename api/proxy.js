const BACKEND = 'http://34.176.216.15:3000';

export default async function handler(req, res) {
  const target = `${BACKEND}/api${req.url}`;
  const { method, headers } = req;

  const fetchHeaders = { ...headers };
  delete fetchHeaders['host'];
  delete fetchHeaders['connection'];

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

    const init = { method, headers: fetchHeaders };
    if (method !== 'GET' && method !== 'HEAD' && body.length > 0) {
      init.body = body;
    }

    const response = await fetch(target, init);
    const data = await response.text();

    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    res.status(response.status).send(data);
  } catch (err) {
    res.status(502).json({ error: 'Backend unreachable', detail: err.message });
  }
}

export const config = {
  api: { bodyParser: false },
};
