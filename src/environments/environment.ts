/**
 * @summary Production environment configuration.
 */
export const environment = {
  production: true,
  baseUrl: 'http://34.176.216.15:3000',
  mock: typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
};

