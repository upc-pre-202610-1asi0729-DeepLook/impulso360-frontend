const BACKEND = 'http://34.176.216.15:3000';

export default async function handler(request) {
  const url = new URL(request.url);
  const target = `${BACKEND}/api${url.pathname}${url.search}`;

  try {
    const response = await fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
      redirect: 'follow',
    });

    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Backend unreachable', detail: err.message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export const config = {
  runtime: 'edge',
};
