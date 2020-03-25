import { PipeTransform, BadRequestException } from '@nestjs/common';
import { AdCategory } from '../models/ad-category.enum';

export class AdEnumsValidationPipe implements PipeTransform {
  readonly allowedStatuses = [AdCategory.LABOR, AdCategory.SERVICE];
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
