import { Module } from '@nestjs/common';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdRepository } from './models/ad.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([AdRepository]), AuthModule],
  controllers: [AdsController],
  providers: [AdsService],
})
export class AdsModule {}
