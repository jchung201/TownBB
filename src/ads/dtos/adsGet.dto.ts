import { IsOptional, IsNotEmpty } from 'class-validator';

export class AdsGetDTO {
  @IsOptional()
  @IsNotEmpty()
  category: string[];

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
