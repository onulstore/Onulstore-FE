import Send from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useItemSlice } from 'store/hooks';
const getItem = createAsyncThunk('itemSlice/getItem', async () => {
  const { data } = await Send({
    url: '/item',
    method: 'GET',
  });
  return data;
});

const getZipCode = createAsyncThunk('itemSlice/getZipCode', async (zipCode: string) => {
  const { data } = await axios({
    url: `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  return data.results;
});

export { getItem, getZipCode };
