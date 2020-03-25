import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class AdPostDTO {
  // Meta
  @IsNotEmpty()
  title: string;
  description: string;
  @IsNotEmpty()
  location: string;
  value: string;
  categories: string[];
  images: string[];
  company: string;

  // Contact
  @IsNotEmpty()
  @IsEmail()
  contactEmail: string;
  contactPhone: string;
  contactWebsite: string;

  // Auth
  @IsNotEmpty()
  @Length(5, 20)
  password: string;
}
