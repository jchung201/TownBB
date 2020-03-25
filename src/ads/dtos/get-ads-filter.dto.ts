import { AdCategory } from '../models/ad-category.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetAdsFilterDTO {
  @IsOptional()
  @IsIn([AdCategory.LABOR, AdCategory.SERVICE])
  category: AdCategory;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
