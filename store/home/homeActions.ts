import axios from 'axios';
import { AnyAction } from 'redux';
import { API_URL } from '../../utilities/envUrl';

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_LOCATION = 'GET_LOCATION';
const GET_POSTS = 'GET_POSTS';

interface Category {
  data: string[];
}

interface Post {
  id: number;
  title: string;
  description: string | null;
  location: string | null;
  longitude: number;
  latitude: number;
  value: string | null;
  categories: string[];
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

export const getCategories = async (): Promise<AnyAction> => {
  const request = await axios.get<Category>(`${API_URL}/rest/ads/categories`);
  const { data } = request;
  return {
    type: GET_CATEGORIES,
    payload: data,
  };
};
export const getLocation = async (): Promise<AnyAction> => {
  // TODO: Fetch geolocation
  const location = await 'New york';
  // const request = await axios.get(`${API_URL}/ads/categories`);
  // const { data } = request;
  return {
    type: GET_LOCATION,
    payload: location,
  };
};

export const getPosts = async (): Promise<AnyAction> => {
  const request = await axios.get<Post[]>(`${API_URL}/rest/ads/`);
  const { data } = request;
  return {
    type: GET_POSTS,
    payload: data,
  };
};
