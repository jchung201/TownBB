import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.model';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  getAllJobs(): Job[] {
    return this.jobsService.getAllJobs();
  }
}
