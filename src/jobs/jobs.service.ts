import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JobCategory } from './models/job-category.enum';
import { CreateJobDTO } from './dtos/create-job.dto';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';
import { JobRepository } from './models/job.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './models/job.entity';
import { User } from 'src/auth/models/user.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobRepository)
    private jobRepository: JobRepository,
  ) {}

  async getJobById(id: number): Promise<Job> {
    const foundJob = await this.jobRepository.findOne(id);
    if (!foundJob)
      throw new NotFoundException(`Job with ID "${id}" not found!`);
    return foundJob;
  }

  async getJobs(filterDTO: GetJobsFilterDTO): Promise<Job[]> {
    return this.jobRepository.getJobs(filterDTO);
  }

  async createJob(createJobDTO: CreateJobDTO, user: User): Promise<Job> {
    return this.jobRepository.createJob(createJobDTO, user);
  }

  async deleteJob(id: number, user: User): Promise<void> {
    const job = await this.getJobById(id);
    if (job.userId !== user.id)
      throw new UnauthorizedException('You do not own this Job!');
    const result = await this.jobRepository.delete({ id, userId: user.id });
    if (result.affected === 0)
      throw new NotFoundException(`Job with ID "${id}" not found!`);
  }

  async updateJob(
    id: number,
    title: string,
    category: JobCategory,
    user: User,
  ): Promise<Job> {
    const job = await this.getJobById(id);
    if (job.userId !== user.id)
      throw new UnauthorizedException('You do not own this Job!');
    job.title = title;
    job.category = category;
    await job.save();
    return job;
  }
}
