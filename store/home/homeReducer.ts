import { Post } from './home.types';

interface ExampleState {
  location: string;
  categories: string[];
  posts: Post[];
  post: Post | null;
  latitude: number | null;
  longitude: number | null;
  category: string | null;
}
const exampleState: ExampleState = {
  location: '',
  categories: [],
  posts: [],
  post: null,
  latitude: null,
  longitude: null,
  category: null,
};

export const homeReducer = (state = exampleState, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return { ...state, location: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'GET_POSTS':
      return { ...state, posts: action.payload };
    case 'GET_POST':
      return { ...state, post: action.payload };
    case 'GET_LOCATION':
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        formattedAddress: action.payload.formattedAddress,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'GET_LOCATION_AND_POSTS':
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        formattedAddress: action.payload.formattedAddress,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
};
