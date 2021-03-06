import { IsNotEmpty } from 'class-validator';

export class AdPatchDTO {
  // Meta
  title: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  value: string;
  category: string;
  type: string;
  images: string[];
  company: string;

  // Contact
  contactEmail: string;
  contactPhone: string;
  contactWebsite: string;
}
