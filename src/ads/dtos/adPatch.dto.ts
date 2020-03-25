import { IsNotEmpty } from 'class-validator';

export class AdPatchDTO {
  // Meta
  title: string;
  description: string;
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
  @IsNotEmpty()
  hash: string;
  @IsNotEmpty()
  password: string;
}
