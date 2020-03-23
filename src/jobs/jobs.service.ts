import { Injectable, NotFoundException } from '@nestjs/common';
import { JobCategory } from './models/job-category.enum';
import * as uuid from 'uuid/v1';
import { CreateJobDTO } from './dtos/create-job.dto';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';
import { JobRepository } from './models/job.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './models/job.entity';

@Injectable()
export class JobsService {
  constructor(private jobRepository: JobRepository) {}

  async getJobById(id: number): Promise<Job> {
    const foundJob = await this.jobRepository.findOne(id);
    if (!foundJob)
      throw new NotFoundException(`Job with ID "${id}" not found!`);
    return foundJob;
  }

  async getJobs(filterDTO: GetJobsFilterDTO): Promise<Job[]> {
    return this.jobRepository.getJobs(filterDTO);
  }

  async createJob(createJobDTO: CreateJobDTO): Promise<Job> {
    return this.jobRepository.createJob(createJobDTO);
  }

  async deleteJob(id: number): Promise<void> {
    const result = await this.jobRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Job with ID "${id}" not found!`);
  }

  async updateJob(
    id: number,
    title: string,
    category: JobCategory,
  ): Promise<Job> {
    const job = await this.getJobById(id);
    job.title = title;
    job.category = category;
    await job.save();
    return job;
  }
}
