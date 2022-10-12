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

//addCart
const addCart = createAsyncThunk('cartSlice/addCart', async (payload: any) => {
  const { memberEmail, productId, quantity } = payload;

  const { data } = await cart({
    method: 'POST',
    url: '/carts',
    data: {
      memberEmail,
      productId,
      quantity,
    },
  });
  return data;
});

export { getUser, addCart };
