import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRepository } from './models/job.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([JobRepository]), AuthModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
