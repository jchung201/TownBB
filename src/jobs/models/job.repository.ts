import { Repository, EntityRepository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDTO } from '../dtos/create-job.dto';
import { JobCategory } from './job-category.enum';
import { GetJobsFilterDTO } from '../dtos/get-jobs-filter.dto';
import { User } from 'src/auth/models/user.entity';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
  private logger = new Logger('Job Repository');

  async getJobs(filterDTO: GetJobsFilterDTO): Promise<Job[]> {
    const { category, search } = filterDTO;
    const query = this.createQueryBuilder('job');
    if (category) query.andWhere('job.category = :category', { category });
    if (search)
      query.andWhere(
        'job.title LIKE :search OR job.company LIKE :search OR job.location LIKE :search',
        { search: `%${search}%` },
      );
    try {
      const jobs = await query.getMany();
      return jobs;
    } catch (error) {
      this.logger.error(
        `Failed to fetch jobs. Filters: ${JSON.stringify(filterDTO)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createJob(createJobDTO: CreateJobDTO, user: User): Promise<Job> {
    const { title, company, rate, location } = createJobDTO;
    const job = new Job();
    job.title = title;
    job.company = company;
    job.rate = rate;
    job.location = location;
    job.category = JobCategory.LABOR;
    job.user = user;
    await job.save();
    delete job.user;
    return job;
  }
}
