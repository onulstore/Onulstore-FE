import api from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSearch = createAsyncThunk('searchSlice/getSearch', async (searchValue: string) => {
  const { data } = await api({
    method: 'POST',
    url: `/products/search?product=${searchValue}`,
  });
  return data.content;
});
