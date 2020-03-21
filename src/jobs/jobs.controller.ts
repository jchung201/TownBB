import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.model';
import { CreateJobDTO } from './dtos/create-job.dto';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  getJobs(@Query() filterDTO: GetJobsFilterDTO): Job[] {
    if (Object.keys(filterDTO).length) {
      return this.jobsService.getJobsWithFilters(filterDTO);
    }
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

  @Patch('/:id')
  updateJob(@Param('id') id: string, @Body('title') title: string): Job {
    return this.jobsService.updateJob(id, title);
  }
}
