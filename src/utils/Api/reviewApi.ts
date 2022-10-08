import review from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IreviewData {
  content: string;
  productId: number;
  rate: number;
  title: string;
}

//getMemberReview

const getMembersReview = createAsyncThunk('reviewSlice/getMembersReview', async () => {
  const { data } = await review({
    method: 'GET',
    url: '/members/reviews',
  });
});

//getProductsReview
const getProductsReview = createAsyncThunk(
  'reviewSlice/getPoductsReview',
  async (productId: string) => {
    const { data } = await review({
      method: 'GET',
      url: `/products/${productId}/reviews`,
    });
    return data;
  },
);

//getSingleProductReview
const getSingleProductReview = createAsyncThunk(
  'reviewSlice/getSingleProductReview',
  async (reviewId) => {
    const { data } = await review({
      method: 'GET',
      url: `/reviews/${reviewId}`,
    });
    return data;
  },
);

//addReview
const addReview = createAsyncThunk('reviewSlice/postReview', async (payload: IreviewData) => {
  const { content, productId, rate, title } = payload;

  const { data } = await review({
    method: 'POST',
    url: '/reviews',
    data: {
      content,
      productId,
      rate,
      title,
    },
  });
  return data;
});

//editReview
const editReview = createAsyncThunk('reviewSlice/editReview', async (payload: IreviewData) => {
  const { productId, title, content, rate } = payload;
  const { data } = await review({
    method: 'PUT',
    url: `/reviews/${productId}`,
    data: {
      productId,
      title,
      content,
      rate,
    },
  });
  return data;
});

//deleteReview
const deleteReview = createAsyncThunk('reviewSlice/deleteReview', async (reviewId: string) => {
  const { data } = await review({
    method: 'DELETE',
    url: `/reviews/${reviewId}`,
  });
  return data;
});

export { addReview };
