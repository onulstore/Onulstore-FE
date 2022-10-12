import { combineReducers } from '@reduxjs/toolkit';
import item from './itemSlice';
import review from './reviewSlice';
import QnA from './QnASlice';
import cart from './cartSlice';
const rootReducer = combineReducers({
  item,
  review,
  QnA,
  cart,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
