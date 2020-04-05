interface ExampleState {
  location: string;
  categories: string[];
  posts: any[];
}
const exampleState: ExampleState = {
  location: '',
  categories: [],
  posts: [],
};

export const homeReducer = (state = exampleState, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return { ...state, location: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'GET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
