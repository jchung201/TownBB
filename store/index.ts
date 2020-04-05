import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { homeReducer } from './home/homeReducer';

const rootReducer = combineReducers({
  home: homeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
};
