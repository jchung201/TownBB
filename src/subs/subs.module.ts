import { Module } from '@nestjs/common';
import { SubsController } from './subs.controller';
import { SubsService } from './subs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubRepository } from './models/sub.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SubRepository])],
  controllers: [SubsController],
  providers: [SubsService],
})
export class SubsModule {}
