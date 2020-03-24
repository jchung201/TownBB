import { Test } from '@nestjs/testing';
import { JobsService } from './jobs.service';
import { JobRepository } from './models/job.repository';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';
import { JobCategory } from './models/job-category.enum';
import { NotFoundException } from '@nestjs/common';

const mockJobRepository = () => ({
  getJobs: jest.fn(),
  findOne: jest.fn(),
});

describe('JobsService', () => {
  let jobsService;
  let jobRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        JobsService,
        { provide: JobRepository, useFactory: mockJobRepository },
      ],
    }).compile();
    jobsService = await module.get<JobsService>(JobsService);
    jobRepository = await module.get<JobRepository>(JobRepository);
  });

  describe('getJobs', () => {
    it('gets all jobs from the repository', async () => {
      expect(jobRepository.getJobs).not.toHaveBeenCalled();
      jobRepository.getJobs.mockResolvedValue('Some Value');
      const filters: GetJobsFilterDTO = {
        category: JobCategory.LABOR,
        search: 'waiter',
      };
      const result = await jobsService.getJobs(filters);
      expect(jobRepository.getJobs).toHaveBeenCalled();
      expect(result).toEqual('Some Value');
    });
  });
  describe('getJobById', () => {
    it('calls jobRepository.findOne() and succesffuly retrieve and return the job', async () => {
      const mockJob = { title: 'Test job', description: 'Test desc' };
      jobRepository.findOne.mockResolvedValue(mockJob);

      const result = await jobsService.getJobById(1);
      expect(result).toEqual(mockJob);

      expect(jobRepository.findOne).toHaveBeenCalledWith(1);
    });
    it('throws an error as job is not found', () => {
      jobRepository.findOne.mockResolvedValue(null);
      expect(jobsService.getJobById(1)).rejects.toThrow(NotFoundException);
    });
  });
});
