import { RootState } from '../index';
import { ThunkAction } from 'react-redux';
import { Action } from 'redux';

export interface Category {
  data: string[];
}

export interface Post {
  id: number;
  title: string;
  description: string | null;
  location: string | null;
  longitude: number;
  latitude: number;
  value: string | null;
  category: string;
  type: string | null;
  images: string[];
  company: string | null;
  contactEmail: string;
  contactPhone: string | null;
  contactWebsite: string | null;
  deleted: boolean;
  deletedAt: Date | null;
  created: Date;
  updated: Date;
}
export class GetPostsDTO {
  search?: string | string[];
  latitude?: string;
  longitude?: string;
  category?: string;
}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
