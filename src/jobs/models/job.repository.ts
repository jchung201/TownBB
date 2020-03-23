import { Repository, EntityRepository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDTO } from '../dtos/create-job.dto';
import { JobCategory } from './job-category.enum';
import { GetJobsFilterDTO } from '../dtos/get-jobs-filter.dto';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
  async getJobs(filterDTO: GetJobsFilterDTO): Promise<Job[]> {
    const { category, search } = filterDTO;
    const query = this.createQueryBuilder('job');
    if (category) query.andWhere('job.category = :category', { category });
    if (search)
      query.andWhere(
        'job.title LIKE :search OR job.company LIKE :search OR job.location LIKE :search',
        { search: `%${search}%` },
      );
    const jobs = await query.getMany();
    return jobs;
  }

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
