import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const retrieveOrmConfig = (): TypeOrmModuleOptions => {
  // DB
  let DATABASE_URL;
  let TYPEORM_SYNC;

  switch (process.env.NODE_ENV) {
    case 'production':
      TYPEORM_SYNC = false;
      break;
    case 'development':
      // to do: use url parser? i want to pass simple string!
      DATABASE_URL = 'postgresql://postgres:postgres@localhost:5432/townbb';
      TYPEORM_SYNC = true;
      break;
    default:
      DATABASE_URL = 'postgresql://postgres:postgres@localhost:5432/townbb';
      TYPEORM_SYNC = true;
  }

  return {
    type: 'postgres',
    url: process.env.DATABASE_URL || DATABASE_URL,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.TYPEORM_SYNC || TYPEORM_SYNC,
  };
};
