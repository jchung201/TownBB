import { NestFactory } from '@nestjs/core';
import { NextModule } from '@nestpress/next';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  if (process.env.NODE_ENV === 'development') app.enableCors();
  else {
    app.enableCors({ origin: configService.get('WEB_URL') });
    logger.log(
      `Accepting requests from origin ${configService.get('WEB_URL')}`,
    );
  }

  const port = process.env.PORT || configService.get('PORT');
  app
    .get(NextModule)
    .prepare()
    .then(() => {
      app.listen(Number(port));
      logger.log(`Application listening on port ${port}`);
    });
}
bootstrap();
