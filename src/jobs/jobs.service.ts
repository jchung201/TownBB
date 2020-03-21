import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private jobs = [
    {
      id: 1,
      title: 'Dishwasher wanted',
      company: 'JJ inc',
      rate: '75 hour',
      location: 'New York City',
    },
  ];

  getAllJobs() {
    return this.jobs;
  }
}
