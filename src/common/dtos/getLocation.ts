import { IsNotEmpty } from 'class-validator';

export class GetLocationDTO {
  @IsNotEmpty()
  location: string;
}
