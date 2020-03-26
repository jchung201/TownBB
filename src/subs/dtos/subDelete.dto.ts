import { IsNotEmpty } from 'class-validator';

export class SubDeleteDTO {
  // Auth
  @IsNotEmpty()
  hash: string;
}
