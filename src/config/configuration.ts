// App
let PORT;
// ENV
let WEB_URL;

switch (process.env.NODE_ENV) {
  case 'production':
    WEB_URL = 'https://townbb.com';
  case 'development':
    PORT = 3000;
    WEB_URL = 'localhost:4000';
  default:
    PORT = 3000;
    WEB_URL = 'localhost:4000';
}
export default () => ({
  PORT,
  WEB_URL,
});
