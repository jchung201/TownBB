import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRepository } from './models/job.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JobRepository])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
