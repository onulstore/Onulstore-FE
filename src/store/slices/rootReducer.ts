import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import item from './itemSlice';
import review from './reviewSlice';
import QnA from './QnASlice';
import cart from './cartSlice';
import user from './userSlice';

const persistConfig = {
  key: 'root', // root에서부터 저장
  storage, // storage = localStorage
  whitelist: ['item'], // 지속시킬 reducer
};
const rootReducer = combineReducers({
  item,
  review,
  QnA,
  cart,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
