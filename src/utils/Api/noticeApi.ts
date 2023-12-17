import api from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNotice = createAsyncThunk('noticeSlice/getNotice', async () => {
  const { data } = await api.get('/notices');
  return data.notices;
});
