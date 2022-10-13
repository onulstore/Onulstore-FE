import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
//API
import { getZipCode } from 'utils/Api/itemApi';
import { getAllItemList, getSingleItemList } from 'utils/Api/itemApi';

export const priceFomater = (country: string, price: number): string => {
  return new Intl.NumberFormat(country).format(price);
};
// 전체상품 관련 타입
interface Ibarnd {
  id: number;
  brandName: string;
}

interface Icategory {
  id: number;
  categoryName: string;
  parent: any;
}

export interface IallItemList {
  bookmark?: boolean;
  brand: Ibarnd;
  category: Icategory;
  content: string;
  createdDate?: string;
  id: number;
  price: number;
  productName: string;
  productStatus: string;
  purchaseCount: number;
  quantity: number;
  updatedDate?: number;
}
// 상품 상세정보 타입
export interface IsingItemList extends IallItemList {
  productImage: string[];
  wishListCount: number;
}

//일본 api 주소 관련 타입
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
// 스토어 데이터 타입
interface StateType {
  isShowLargeCategoryModal: Boolean;
  LargeCategoryTitle: string;
  isLoding: boolean;
  allItemList: IallItemList[];
  //Record<string, never> 는 빈 객체의 타입을 의미한다
  singleItemList: Record<string, never> | IsingItemList;
  error: string;
  isDetailPage: boolean;
  isLike: boolean;
  searchAddress: IsearchAddress[];
  dumyImageIndex: number;
}

const initialState: StateType = {
  isShowLargeCategoryModal: false,
  isDetailPage: false,
  isLike: false,
  isLoding: false,
  LargeCategoryTitle: '',
  allItemList: [],
  singleItemList: {},
  error: '요청실패!',
  searchAddress: [],
  dumyImageIndex: 0,
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
    getDumyImageIndex: (state, action: PayloadAction<number>) => {
      state.dumyImageIndex = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllItemList.pending, (state) => {
      state.isLoding = true; // true false로 명시하기
    });
    builder.addCase(getAllItemList.fulfilled, (state, action: PayloadAction<IallItemList[]>) => {
      state.isLoding = false;
      state.allItemList = action.payload;
    });
    builder.addCase(getAllItemList.rejected, (state) => {
      state.isLoding = false;
    });

    builder.addCase(getSingleItemList.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(getSingleItemList.fulfilled, (state, action: PayloadAction<IsingItemList>) => {
      state.isLoding = false;
      state.singleItemList = action.payload;
    });
    builder.addCase(getSingleItemList.rejected, (state) => {
      state.isLoding = false;
    });

    builder.addCase(getZipCode.fulfilled, (state, action: PayloadAction<IsearchAddress[]>) => {
      if (action.payload === null) {
        alert('입력하신 우편번호를 조회 할 수 없습니다 다시 입력 해 주세요!');
      }
      state.searchAddress = action.payload;
    });
  },
});

export const { largeCategoryModalHandler, headerBarHandler, getDumyImageIndex } = itemSlice.actions;

export default itemSlice.reducer;
