import axios from 'axios';
import { AnyAction, Action } from 'redux';
import { API_URL } from '../../utilities/envUrl';

import { Category, Post, GetPostsDTO, AppThunk } from './home.types';

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_LOCATION = 'GET_LOCATION';
const GET_POSTS = 'GET_POSTS';

export const getPostsAction = ({ data }) => {
  return {
    type: GET_POSTS,
    payload: data,
  };
};

export const getPosts = (
  getPostsDTO: GetPostsDTO,
): AppThunk => async dispatch => {
  const request = await axios.get<Post[]>(`${API_URL}/rest/ads/`, {
    params: getPostsDTO,
  });
  const { data } = request;
  return dispatch(
    getPostsAction({
      data,
    }),
  );
};

export const getCategoriesAction = ({ data }) => {
  return {
    type: GET_CATEGORIES,
    payload: data,
  };
};
export const getCategories = (): AppThunk => async dispatch => {
  const request = await axios.get<Category>(`${API_URL}/rest/ads/categories`);
  const { data } = request;
  return dispatch(
    getPostsAction({
      data,
    }),
  );
};

export const getLocationAction = () => {
  return {
    type: GET_LOCATION,
    payload: location,
  };
};

export const getLocation = (): AppThunk => async dispatch => {
  // TODO: Fetch geolocation
  const location = await 'New York';
  // const request = await axios.get<Category>(`${API_URL}/rest/ads/categories`);
  // const { data } = request;
  return dispatch(
    getPostsAction({
      data: location,
    }),
  );
};
