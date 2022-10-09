import axios from 'axios';
import item from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllItemList = createAsyncThunk('itemSlice/getAllItemList', async () => {
  const { data } = await item({
    url: '/products/list?page=3',
    method: 'GET',
  });
  return data.content;
});

const getSingleItemList = createAsyncThunk(
  'itemSlice/getSingleItemList',
  async (id: string | undefined) => {
    const { data } = await item({
      url: `/products/${id}`,
      method: 'GET',
    });
    return data;
  },
);

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

export { getAllItemList, getSingleItemList, getZipCode };
