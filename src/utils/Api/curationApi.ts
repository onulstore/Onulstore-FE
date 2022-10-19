import api from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCurations = createAsyncThunk('curationsSlice/getCurations', async () => {
  const { data } = await api.get('/curations');
  return data.content;
});
