import cart from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

//임시로 만든 api
const getUser = createAsyncThunk('cartSlice/getUser', async () => {
  const { data } = await cart({
    method: 'GET',
    url: '/members',
  });
  return data;
});

const getCart = createAsyncThunk('cartSlice/getCart', async () => {
  const { data } = await cart({
    method: 'GET',
    url: '/carts',
  });
  return data;
});

//addCart
const addCart = createAsyncThunk('cartSlice/addCart', async (payload: any) => {
  const { productId, quantity } = payload;

  const { data } = await cart({
    method: 'POST',
    url: '/carts',
    data: {
      productId,
      quantity,
    },
  });
  return data;
});

export { getUser, addCart, getCart };
