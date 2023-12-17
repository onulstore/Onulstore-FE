import axios from 'axios';
import item from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

//상품 전체조회
const getAllItemList = createAsyncThunk('itemSlice/getAllItemList', async () => {
  const { data } = await item({
    url: '/products/list',
    method: 'GET',
  });
  return data.content;
});

//상품 상세조회
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

//브랜드 전체조회
const getAllBrandList = createAsyncThunk('itemSlice/getAllBrandList', async () => {
  const { data } = await item({
    url: '/brands',
    method: 'GET',
  });
  return data.findAllBrands;
});

//브랜드 아이디로 상품조회
const searchItemByBrand = createAsyncThunk(
  'itemSlice/searchItemByBrand',
  async (brandId: number) => {
    const { data } = await item({
      url: `/brands/${brandId}/product`,
      method: 'GET',
    });
    return data.content;
  },
);

//카테고리 아이디로 상품조회
const searchItemByCategory = createAsyncThunk(
  'itemSlice/searchItemByCategory',
  async (categoryId: number) => {
    const { data } = await item({
      url: `/categories/${categoryId}/products`,
      method: 'GET',
    });
    if (data.content.length > 1) {
      return (data.content[0] = data.content[0].concat(data.content[1]));
    } else {
      return data.content[0];
    }
  },
);

//일본 우편주소 조회
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

export {
  getAllItemList,
  getSingleItemList,
  getAllBrandList,
  getZipCode,
  searchItemByCategory,
  searchItemByBrand,
};
