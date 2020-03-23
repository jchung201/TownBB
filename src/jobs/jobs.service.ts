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
    const found = await this.jobRepository.findOne(id);
    if (!found) throw new NotFoundException(`Job with ID "${id}" not found!`);
    return found;
  }

  // getAllJobs(): Job[] {
  //   return this.jobs;
  // }

  // getJobsWithFilters(filterDTO: GetJobsFilterDTO) {
  //   const { category, search } = filterDTO;
  //   let jobs = this.getAllJobs();
  //   if (category) {
  //     jobs = jobs.filter(job => job.category === category);
  //   }
  //   if (search) {
  //     jobs = jobs.filter(job => {
  //       return (
  //         job.title.includes(search) ||
  //         job.company.includes(search) ||
  //         job.location.includes(search)
  //       );
  //     });
  //   }

  //   return jobs;
  // }

  async createJob(createJobDTO: CreateJobDTO): Promise<Job> {
    return this.jobRepository.createJob(createJobDTO);
  }

  // deleteJob(id: string): void {
  //   const foundJob = this.getJobById(id);
  //   this.jobs = this.jobs.filter(job => {
  //     return job.id !== foundJob.id;
  //   });
  // }
  // updateJob(id: string, title: string, category: JobCategory): Job {
  //   const job = this.getJobById(id);
  //   job.title = title;
  //   job.category = category;
  //   return job;
  // }
}
