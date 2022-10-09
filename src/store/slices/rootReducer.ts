import { combineReducers } from '@reduxjs/toolkit';
import item from './itemSlice';
import review from './reviewSlice';
import QnA from './QnASlice';

const rootReducer = combineReducers({
  item,
  review,
  QnA,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
