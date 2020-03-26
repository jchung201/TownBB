import { NestFactory } from '@nestjs/core';
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
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
