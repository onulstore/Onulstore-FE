import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addReview, IreviewData } from 'utils/Api/reviewApi';

export interface Ibase64 {
  img: string;
  id: string;
}

interface StateType {
  base64Store: Ibase64[];
  isLoding: boolean;
  allReviewList: IreviewData[];
}

const initialState: StateType = {
  base64Store: [],
  isLoding: false,
  allReviewList: [],
};

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  reducers: {
    addBase64Img: (state, action) => {
      state.base64Store = state.base64Store.concat(action.payload);
    },
    deleteToBase64Img: (state, action) => {
      state.base64Store = state.base64Store.filter((el: Ibase64) => {
        return el.id !== action.payload.id;
      });
    },
  },
  extraReducers: (builder) => {
    //addReview
    builder.addCase(addReview.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(addReview.fulfilled, (state, action: PayloadAction<IreviewData>) => {
      state.isLoding = false;
      console.log(action.payload);
    });
    builder.addCase(addReview.rejected, (state) => {
      state.isLoding = false;
    });
  },
});

export const { addBase64Img, deleteToBase64Img } = reviewSlice.actions;

export default reviewSlice.reducer;
