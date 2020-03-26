import { IsNotEmpty, IsEmail } from 'class-validator';

export class SubPostDTO {
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  deleted: boolean;
}
