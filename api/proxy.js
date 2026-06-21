const BACKEND = 'http://34.176.216.15:3000';

export default async function handler(req, res) {
  const { path } = req.query;
  const target = `${BACKEND}/api/${Array.isArray(path) ? path.join('/') : path}`;
  const { method, headers, body } = req;

  const fetchHeaders = { ...headers };
  delete fetchHeaders['host'];
  delete fetchHeaders['connection'];

  try {
    const init = { method, headers: fetchHeaders };
    if (method !== 'GET' && method !== 'HEAD' && body) {
      init.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    const response = await fetch(target, init);
    const contentType = response.headers.get('content-type') || 'application/json';
    res.setHeader('Content-Type', contentType);
    res.status(response.status);

    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(502).json({ error: 'Backend unreachable', detail: err.message });
  }
}

export const config = {
  api: { bodyParser: false },
};
