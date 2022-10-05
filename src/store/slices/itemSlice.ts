import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//API
import { getItem, getZipCode } from 'utils/Api/dumy/dumyApi';

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

export interface IsearchAddress {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
}

interface StateType {
  isShowLargeCategoryModal: Boolean;
  LargeCategoryTitle: string;
  isLoding: boolean;
  allItemList: AllItemList[];
  error: string;
  isDetailPage: boolean;
  isLike: boolean;
  searchAddress: IsearchAddress[];
}

const initialState: StateType = {
  isShowLargeCategoryModal: false,
  isDetailPage: false,
  isLike: false,
  isLoding: false,
  LargeCategoryTitle: '',
  allItemList: [],
  error: '요청실패!',
  searchAddress: [],
};

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    largeCategoryModalHandler: (state) => {
      state.isShowLargeCategoryModal = !state.isShowLargeCategoryModal;
    },
    headerBarHandler: (state) => {
      state.isDetailPage = !state.isDetailPage;
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
    builder.addCase(getZipCode.fulfilled, (state, action: PayloadAction<IsearchAddress[]>) => {
      if (action.payload === null) {
        alert('입력하신 우편번호를 조회 할 수 없습니다 다시 입력 해 주세요!');
      }
      state.searchAddress = action.payload;
    });
  },
});

export const { largeCategoryModalHandler, headerBarHandler } = itemSlice.actions;

export default itemSlice.reducer;
