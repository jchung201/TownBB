import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.model';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  getAllJobs(): Job[] {
    return this.jobsService.getAllJobs();
  }

  @Post()
  createJob(
    @Body('title') title: string,
    @Body('company') company: string,
    @Body('rate') rate: string,
    @Body('location') location: string,
  ) {
    return this.jobsService.createJob(title, company, rate, location);
  }
}
