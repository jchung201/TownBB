import axios from 'axios';

import { AnyAction } from 'redux';
import { API_URL } from '../../utilities/envUrl';
import { GetPostsDTO, Post, Category } from './home.types';

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_LOCATION = 'GET_LOCATION';
const GET_POSTS = 'GET_POSTS';

export const getPosts = async (
  getPostsDTO?: GetPostsDTO,
): Promise<AnyAction> => {
  const request = await axios.get<Post[]>(`${API_URL}/rest/ads/`, {
    params: getPostsDTO,
  });
  const { data } = request;
  return {
    type: GET_POSTS,
    payload: data,
  };
};

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
