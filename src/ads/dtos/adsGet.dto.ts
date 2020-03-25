import { IsOptional, IsNotEmpty } from 'class-validator';

export class AdsGetDTO {
  @IsOptional()
  @IsNotEmpty()
  categories: string[];

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
