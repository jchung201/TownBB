import { IsNotEmpty } from 'class-validator';

export class CreateJobDTO {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  company: string;
  @IsNotEmpty()
  rate: string;
  @IsNotEmpty()
  location: string;
}
