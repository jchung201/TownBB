import { Injectable } from '@nestjs/common';
import { Job, JobCategory } from './jobs.model';
import * as uuid from 'uuid/v1';
import { CreateJobDTO } from './dtos/create-job.dto';

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

  getAllJobs() {
    return this.jobs;
  }

  getJobById(id: string): Job {
    return this.jobs.find(job => job.id === id);
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
}
