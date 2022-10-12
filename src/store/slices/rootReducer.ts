import { combineReducers } from '@reduxjs/toolkit';
import item from './itemSlice';
import review from './reviewSlice';
import user from './userSlice';
const rootReducer = combineReducers({
  item,
  review,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
