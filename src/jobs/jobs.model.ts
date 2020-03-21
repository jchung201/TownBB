export interface Job {
  id: string;
  title: string;
  company: string;
  rate: string;
  location: string;
  category: JobCategory;
}

export enum JobCategory {
  SERVICE = 'SERVICE',
  LABOR = 'LABOR',
}
