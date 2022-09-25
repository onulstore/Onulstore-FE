import Send from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getItem = createAsyncThunk('itemSlice/getItem', async () => {
  const { data } = await Send({
    url: '/item',
    method: 'GET',
  });
  return data;
});

export { getItem };
