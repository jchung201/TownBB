export default () => {
  // App
  let PORT;
  // ENV
  let WEB_URL;
  let S3_BUCKET_NAME;
  switch (process.env.NODE_ENV) {
    case 'production':
      WEB_URL = 'https://townbb.com';
      S3_BUCKET_NAME = 'townbbproduction';
      break;
    case 'development':
      WEB_URL = 'https://townbb-staging.com';
      S3_BUCKET_NAME = 'townbbstaging';
      break;
    case 'development':
      PORT = 3000;
      WEB_URL = 'http://localhost:4000';
      S3_BUCKET_NAME = 'townbbdevelopment';
      break;
    default:
      PORT = 3000;
      WEB_URL = 'http://localhost:4000';
      S3_BUCKET_NAME = 'townbbdevelopment';
  }
  return {
    PORT,
    WEB_URL,
    S3_BUCKET_NAME,
  };
};
