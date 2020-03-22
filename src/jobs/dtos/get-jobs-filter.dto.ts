import { JobCategory } from '../jobs.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetJobsFilterDTO {
  @IsOptional()
  @IsIn([JobCategory.LABOR, JobCategory.SERVICE])
  category: JobCategory;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
