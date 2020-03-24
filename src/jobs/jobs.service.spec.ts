import { Test } from '@nestjs/testing';
import { JobsService } from './jobs.service';
import { JobRepository } from './models/job.repository';
import { GetJobsFilterDTO } from './dtos/get-jobs-filter.dto';
import { JobCategory } from './models/job-category.enum';

const mockUser = { username: 'Test user' };
const mockJobRepository = () => ({
  getJobs: jest.fn(),
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
});
