// ENV
export let API_URL;
switch (process.env.NODE_ENV) {
  case 'production':
    API_URL = 'https://www.townbb.com';
    break;
  case 'test':
    API_URL = 'https://staging.townbb.com';
    break;
  case 'development':
    API_URL = 'http://localhost:3000';
    break;
  default:
    API_URL = 'http://localhost:3000';
}
