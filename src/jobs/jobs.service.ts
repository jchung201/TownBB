import { Injectable, NotFoundException } from '@nestjs/common';
import { Job, JobCategory } from './jobs.model';
import * as uuid from 'uuid/v1';
import { CreateJobDTO } from './dtos/create-job.dto';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';

@Injectable()
export class JobsService {
  private jobs: Job[] = [
    {
      id: '1',
      title: 'Dishwasher wanted',
      company: 'JJ inc',
      rate: '75 hour',
      location: 'New York City',
      category: JobCategory.LABOR,
    },
  ];

  getAllJobs(): Job[] {
    return this.jobs;
  }

  getJobsWithFilters(filterDTO: GetJobsFilterDTO) {
    const { category, search } = filterDTO;
    let jobs = this.getAllJobs();
    if (category) {
      jobs = jobs.filter(job => job.category === category);
    }
    if (search) {
      jobs = jobs.filter(job => {
        return (
          job.title.includes(search) ||
          job.company.includes(search) ||
          job.location.includes(search)
        );
      });
    }

    return jobs;
  }

  getJobById(id: string): Job {
    const foundJob = this.jobs.find(job => job.id === id);
    if (!foundJob) throw new NotFoundException(`Job with id:${id} not found!`);
    return foundJob;
  }

  createJob(createJobDTO: CreateJobDTO): Job {
    const { title, company, rate, location } = createJobDTO;
    const job: Job = {
      id: uuid(),
      title,
      company,
      rate,
      location,
      category: JobCategory.LABOR,
    };
    this.jobs.push(job);
    return job;
  }

  deleteJob(id: string): void {
    const foundJob = this.getJobById(id);
    this.jobs = this.jobs.filter(job => {
      return job.id !== foundJob.id;
    });
  }
  updateJob(id: string, title: string, category: JobCategory): Job {
    const job = this.getJobById(id);
    job.title = title;
    job.category = category;
    return job;
  }
}
