import { IsNotEmpty } from 'class-validator';

export class CreateAdDTO {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  company: string;
  @IsNotEmpty()
  rate: string;
  @IsNotEmpty()
  location: string;
}
