import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
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
  getJobById(@Param('id') id: string): Job {
    return this.jobsService.getJobById(id);
  }

  @Post()
  createJob(@Body() CreateJobDTO: CreateJobDTO): Job {
    return this.jobsService.createJob(CreateJobDTO);
  }

  @Delete('/:id')
  deleteJob(@Param('id') id: string): void {
    return this.jobsService.deleteJob(id);
  }
}
