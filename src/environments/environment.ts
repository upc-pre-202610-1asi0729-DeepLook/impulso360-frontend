/**
 * @summary Production environment configuration.
 */
export const environment = {
  production: true,
  baseUrl: 'http://localhost:3000',
  mock: typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
};

