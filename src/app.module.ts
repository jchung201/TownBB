import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsModule } from './ads/ads.module';
import { typeOrmConfig } from './config/typeorm.config';
import configuration from './config/configuration';
import { SubsModule } from './subs/subs.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AdsModule,
    SubsModule,
    CommonModule,
  ],
})
export class AppModule {}
