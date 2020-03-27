// App
let PORT;
// ENV
let WEB_URL;
let S3_BUCKET_NAME;

switch (process.env.NODE_ENV) {
  case 'production':
    WEB_URL = 'https://townbb.com';
    S3_BUCKET_NAME = 'townbbproduction';
  case 'development':
    WEB_URL = 'https://townbb-staging.com';
    S3_BUCKET_NAME = 'townbbstaging';
  case 'development':
    PORT = 3000;
    WEB_URL = 'http://localhost:4000';
    S3_BUCKET_NAME = 'townbbdevelopment';
  default:
    PORT = 3000;
    WEB_URL = 'http://localhost:4000';
    S3_BUCKET_NAME = 'townbbdevelopment';
}
export default () => ({
  PORT,
  WEB_URL,
  S3_BUCKET_NAME,
});
