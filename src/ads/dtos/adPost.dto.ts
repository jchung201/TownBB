import { IsNotEmpty } from 'class-validator';

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
  contactEmail: string;
  contactPhone: string;
  contactWebsite: string;

  // Auth
  hash: string;
  password: string;
}
