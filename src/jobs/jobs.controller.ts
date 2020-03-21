import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.model';
import { CreateJobDTO } from './dtos/create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  getAllJobs(): Job[] {
    return this.jobsService.getAllJobs();
  }

  @Post()
  createJob(@Body() CreateJobDTO: CreateJobDTO) {
    return this.jobsService.createJob(CreateJobDTO);
  }
}
