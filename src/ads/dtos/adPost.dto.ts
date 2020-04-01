import { IsNotEmpty, IsEmail } from 'class-validator';

export class AdPostDTO {
  // Meta
  @IsNotEmpty()
  title: string;
  description: string;
  @IsNotEmpty()
  location: string;
  @IsNotEmpty()
  longitude: number;
  @IsNotEmpty()
  latitude: number;
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
}
