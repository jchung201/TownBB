import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsModule } from './ads/ads.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SubsModule } from './subs/subs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AdsModule,
    SubsModule,
  ],
})
export class AppModule {}
