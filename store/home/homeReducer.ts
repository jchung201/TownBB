import axios from 'axios';
import { AnyAction } from 'redux';
import { API_URL } from '../../utilities/envUrl';

const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = async (): Promise<AnyAction> => {
  const request = await axios.get(`${API_URL}/ads/categories`);
  const { data } = request;
  return {
    type: GET_CATEGORIES,
    payload: data,
  };
};

interface ExampleState {
  location: string;
  categories: string[];
}
const exampleState: ExampleState = {
  location: '',
  categories: [],
};

export const homeReducer = (state = exampleState, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return { ...state, location: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
