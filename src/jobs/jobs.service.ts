import { Injectable, NotFoundException } from '@nestjs/common';
import { JobCategory } from './models/job-category.enum';
import * as uuid from 'uuid/v1';
import { CreateJobDTO } from './dtos/create-job.dto';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';
import { JobRepository } from './job.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobsService {
  constructor(private jobRepository: JobRepository) {}

  // getJobById(id: number) {
  //   const foundJob = this.jobs.find(job => job.id === id);
  //   if (!foundJob) throw new NotFoundException(`Job with id:${id} not found!`);
  //   return foundJob;
  // }

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

  // createJob(createJobDTO: CreateJobDTO): Job {
  //   const { title, company, rate, location } = createJobDTO;
  //   const job: Job = {
  //     id: uuid(),
  //     title,
  //     company,
  //     rate,
  //     location,
  //     category: JobCategory.LABOR,
  //   };
  //   this.jobs.push(job);
  //   return job;
  // }

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
