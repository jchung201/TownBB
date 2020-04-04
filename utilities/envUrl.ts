// ENV
export let API_URL;
switch (process.env.NODE_ENV) {
  case 'production':
    API_URL = 'https://townbb.com/rest';
    break;
  case 'test':
    API_URL = 'https://townbb-staging.com/rest';
    break;
  case 'development':
    API_URL = 'http://localhost:3000/rest';
    break;
  default:
    API_URL = 'http://localhost:3000/rest';
}
