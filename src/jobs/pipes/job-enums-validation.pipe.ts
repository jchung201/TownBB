import { PipeTransform, BadRequestException } from '@nestjs/common';
import { JobCategory } from '../models/job-category.enum';

export class JobEnumsValidationPipe implements PipeTransform {
  readonly allowedStatuses = [JobCategory.LABOR, JobCategory.SERVICE];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isCategoryVALID(value)) {
      throw new BadRequestException(`${value} is not a valid category`);
    }
    return value;
  }
  private isCategoryVALID(category: any) {
    const index = this.allowedStatuses.indexOf(category);
    return index !== -1;
  }
}
