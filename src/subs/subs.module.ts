import { Module } from '@nestjs/common';
import { SubsController } from './subs.controller';
import { SubsService } from './subs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubRepository } from './models/sub.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([SubRepository])],
  controllers: [SubsController],
  providers: [SubsService],
  exports: [SubsService],
})
export class SubsModule {}
