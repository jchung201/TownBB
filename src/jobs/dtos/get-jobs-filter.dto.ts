import { JobCategory } from '../jobs.model';

export class GetJobsFilterDTO {
  category: JobCategory;
  search: string;
}
