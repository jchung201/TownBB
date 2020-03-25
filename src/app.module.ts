import { Module } from '@nestjs/common';
import { AdsModule } from './ads/ads.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AdsModule],
})
export class AppModule {}
