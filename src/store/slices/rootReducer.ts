import { combineReducers } from '@reduxjs/toolkit';
import item from './itemSlice';
import review from './reviewSlice';
const rootReducer = combineReducers({
  item,
  review,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
