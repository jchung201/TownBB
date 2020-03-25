import { Module } from '@nestjs/common';
import { AdsModule } from './ads/ads.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AdsModule, AuthModule],
})
export class AppModule {}
