import { Module } from '@nestjs/common';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdRepository } from './models/ad.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([AdRepository])],
  controllers: [AdsController],
  providers: [AdsService],
})
export class AdsModule {}
