import { Injectable } from '@nestjs/common';
import { Job } from './jobs.model';

@Injectable()
export class JobsService {
  private jobs: Job[] = [
    {
      id: '1',
      title: 'Dishwasher wanted',
      company: 'JJ inc',
      rate: '75 hour',
      location: 'New York City',
      category: 'LABOR',
    },
  ];

  getAllJobs() {
    return this.jobs;
  }
}
