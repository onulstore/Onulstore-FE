import { combineReducers } from '@reduxjs/toolkit';
import item from './itemSlice';
const rootReducer = combineReducers({
  item,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
