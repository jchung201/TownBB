import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDTO } from './dtos/create-job.dto';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';
import { JobEnumsValidationPipe } from './pipes/job-enums-validation.pipe';
import { Job } from './models/job.entity';
import { JobCategory } from './models/job-category.enum';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  getJobs(@Query(ValidationPipe) filterDTO: GetJobsFilterDTO): Promise<Job[]> {
    return this.jobsService.getJobs(filterDTO);
  }

  @Get('/:id')
  getJobById(@Param('id', ParseIntPipe) id: number): Promise<Job> {
    return this.jobsService.getJobById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createJob(@Body() createJobDTO: CreateJobDTO): Promise<Job> {
    return this.jobsService.createJob(createJobDTO);
  }

  @Delete('/:id')
  deleteJob(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.jobsService.deleteJob(id);
  }

  @Patch('/:id')
  updateJob(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('category', JobEnumsValidationPipe) category: JobCategory,
  ): Promise<Job> {
    return this.jobsService.updateJob(id, title, category);
  }
}
