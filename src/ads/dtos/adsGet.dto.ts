import { IsOptional } from 'class-validator';

export class AdsGetDTO {
  @IsOptional()
  categories: string[];

  @IsOptional()
  search: string;

  @IsOptional()
  latitude: string;
  @IsOptional()
  longitude: string;
  @IsOptional()
  radius: string;
}
