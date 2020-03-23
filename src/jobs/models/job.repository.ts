import { Repository, EntityRepository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDTO } from '../dtos/create-job.dto';
import { JobCategory } from './job-category.enum';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
  async createJob(createJobDTO: CreateJobDTO): Promise<Job> {
    const { title, company, rate, location } = createJobDTO;
    const job = new Job();
    job.title = title;
    job.company = company;
    job.rate = rate;
    job.location = location;
    job.category = JobCategory.LABOR;
    await job.save();
    return job;
  }
}
