import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.jobsService.getJobById(id);
  }

  @Post()
  createJob(@Body() CreateJobDTO: CreateJobDTO) {
    return this.jobsService.createJob(CreateJobDTO);
  }
}
