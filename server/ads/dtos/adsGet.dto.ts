import { IsOptional } from 'class-validator';

export class AdsGetDTO {
  @IsOptional()
  category: string;

  @IsOptional()
  search: string;

  @IsOptional()
  latitude: string;
  @IsOptional()
  longitude: string;
}
