import { Module } from '@nestjs/common';
import { AdsModule } from './ads/ads.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { SubsModule } from './subs/subs.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AdsModule, SubsModule],
})
export class AppModule {}
