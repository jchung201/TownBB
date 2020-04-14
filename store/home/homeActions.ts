import axios from 'axios';
import { API_URL } from '../../utilities/envUrl';

import { Category, Post, GetPostsDTO, AppThunk } from './home.types';

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_LOCATION = 'GET_LOCATION';
const GET_POSTS = 'GET_POSTS';
const SET_CATEGORY = 'SET_CATEGORY';
const GET_LOCATION_AND_POSTS = 'GET_LOCATION_AND_POSTS';
const SET_TYPE = 'SET_TYPE';

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

export const getLocationAction = ({ data }) => {
  const { latitude, longitude, formattedAddress } = data;
  return {
    type: GET_LOCATION,
    payload: {
      latitude,
      longitude,
      formattedAddress,
    },
  };
};

export const getLocation = (location: string): AppThunk => async dispatch => {
  const request = await axios.get(`${API_URL}/rest/common/location`, {
    params: {
      location,
    },
  });
  const { data } = request;
  dispatch(
    getPostsAction({
      data,
    }),
  );
};

export const getLocationAndPostsAction = ({ location, posts }) => {
  const { latitude, longitude, formattedAddress } = location;
  return {
    type: GET_LOCATION_AND_POSTS,
    payload: {
      latitude,
      longitude,
      formattedAddress,
      posts,
    },
  };
};

export const getLocationAndPosts = ({
  search,
  category,
  location,
}): AppThunk => async dispatch => {
  const request = await axios.get(`${API_URL}/rest/common/location`, {
    params: {
      location,
    },
  });
  const { data } = request;

  const request2 = await axios.get<Post[]>(`${API_URL}/rest/ads/`, {
    params: {
      search,
      category,
      latitude: data.latitude,
      longitude: data.longitude,
    },
  });
  dispatch(
    getLocationAndPostsAction({
      location: data,
      posts: request2.data,
    }),
  );
};

export const setCategoryAction = data => {
  return {
    type: SET_CATEGORY,
    payload: data,
  };
};

export const setCategory = (category: string): AppThunk => async dispatch => {
  return dispatch(setCategoryAction(category));
};

export const setTypeAction = data => {
  return {
    type: SET_TYPE,
    payload: data,
  };
};

export const setType = (type: string): AppThunk => async dispatch => {
  return dispatch(setTypeAction(type));
};
