import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//API
import { getItem } from 'utils/Api/dumy/dumyApi';

interface StateType {
  isShowLargeCategoryModal: Boolean;
  LargeCategoryTitle: string;
  isLoding: boolean;
  allItemList: any[];
  error: string;
}

export interface AllItemList {
  productName: string;
  content: string;
  largeCategoryCode: string;
  smallCategoryCode: string;
  price: number;
  quantity: number;
  purchaseCount: number;
  productStatus: string;
  id: string;
}

const initialState: StateType = {
  isShowLargeCategoryModal: false,
  LargeCategoryTitle: '',
  isLoding: false,
  allItemList: [],
  error: '요청실패!',
};

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    largeCategoryModalHandler: (state) => {
      state.isShowLargeCategoryModal = !state.isShowLargeCategoryModal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItem.pending, (state) => {
      state.isLoding = !state.isLoding;
    });
    builder.addCase(getItem.fulfilled, (state, action: PayloadAction<AllItemList[]>) => {
      state.isLoding = !state.isLoding;
      state.allItemList = action.payload;
    });
    builder.addCase(getItem.rejected, (state) => {
      state.isLoding = !state.isLoding;
      console.log(state.error);
    });
  },
});

export const { largeCategoryModalHandler } = itemSlice.actions;

export default itemSlice.reducer;
