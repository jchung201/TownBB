import { IsNotEmpty } from 'class-validator';

export class AdDeleteDTO {
  // Auth
  @IsNotEmpty()
  hash: string;
  @IsNotEmpty()
  password: string;
}
