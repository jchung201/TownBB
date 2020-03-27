import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const retrieveOrmConfig = (): TypeOrmModuleOptions => {
  // DB
  let RDS_TYPE;
  let RDS_HOSTNAME;
  let RDS_PORT;
  let RDS_USERNAME;
  let RDS_PASSWORD;
  let RDS_DB_NAME;
  let TYPEORM_SYNC;

  switch (process.env.NODE_ENV) {
    case 'production':
      TYPEORM_SYNC = false;
      break;
    case 'development':
      RDS_TYPE = 'postgres';
      RDS_HOSTNAME = 'localhost';
      RDS_PORT = 5432;
      RDS_USERNAME = 'postgres';
      RDS_PASSWORD = 'postgres';
      RDS_DB_NAME = 'helpwanted';
      TYPEORM_SYNC = true;
      break;
    default:
      RDS_TYPE = 'postgres';
      RDS_HOSTNAME = 'localhost';
      RDS_PORT = 5432;
      RDS_USERNAME = 'postgres';
      RDS_PASSWORD = 'postgres';
      RDS_DB_NAME = 'helpwanted';
      TYPEORM_SYNC = true;
  }

  return {
    type: RDS_TYPE,
    host: process.env.RDS_HOSTNAME || RDS_HOSTNAME,
    port: process.env.RDS_PORT || RDS_PORT,
    username: process.env.RDS_USERNAME || RDS_USERNAME,
    password: process.env.RDS_PASSWORD || RDS_PASSWORD,
    database: process.env.RDS_DB_NAME || RDS_DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.TYPEORM_SYNC || TYPEORM_SYNC,
  };
};
