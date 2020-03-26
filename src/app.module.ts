import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsModule } from './ads/ads.module';
import { typeOrmConfig } from './config/typeorm.config';
import configuration from './config/configuration';
import { SubsModule } from './subs/subs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AdsModule,
    SubsModule,
  ],
})
export class AppModule {}
