import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonService } from './common.service';

@Module({
  imports: [ConfigModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
