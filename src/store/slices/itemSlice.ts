import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//API
import { getZipCode } from 'utils/Api/itemApi';
import {
  getAllItemList,
  getSingleItemList,
  getAllBrandList,
  searchItemByBrand,
  searchItemByCategory,
} from 'utils/Api/itemApi';

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
  isShowSmallCategoryModal: Boolean;
  isShowBrandSelectdBox: Boolean;
  isShowItemSortSelectBox: Boolean;

  isLoding: boolean;
  isDetailPage: boolean;
  isLike: boolean;

  largeCategoryTitle: string;
  nowPostionTitle: string | string[];

  allItemList: IallItemList[];
  allBrandList: any[];
  filteredBrandList: any[];
  //Record<string, never> 는 빈 객체의 타입을 의미한다
  singleItemList: Record<string, never> | IsingItemList;

  error: string;

  searchAddress: IsearchAddress[];
  dumyImageIndex: number;
}

const initialState: StateType = {
  isShowLargeCategoryModal: false,
  isShowSmallCategoryModal: false,
  isDetailPage: false,
  isShowBrandSelectdBox: false,
  isShowItemSortSelectBox: false,

  isLike: false,
  isLoding: false,

  largeCategoryTitle: '',
  nowPostionTitle: '',

  allItemList: [],

  singleItemList: {},
  allBrandList: [],
  filteredBrandList: [],

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
    smallCategoryModalHandler: (state) => {
      state.isShowSmallCategoryModal = !state.isShowSmallCategoryModal;
    },
    brandSelectBoxHandler: (state, action: PayloadAction<boolean>) => {
      state.isShowBrandSelectdBox = action.payload;
    },
    itemSortSelectBoxHandler: (state, action: PayloadAction<boolean>) => {
      state.isShowItemSortSelectBox = action.payload;
    },

    headerBarHandler: (state) => {
      state.isDetailPage = !state.isDetailPage;
    },

    getNowPosition: (state, action: PayloadAction<string>) => {
      state.nowPostionTitle = action.payload.split(' ');
    },

    itemSortHandler: (state, action: PayloadAction<string>) => {
      if (action.payload === '이름순') {
        state.allItemList = state.allItemList.sort((a, b) =>
          a.productName.localeCompare(b.productName),
        );
      } else if (action.payload === '가격순') {
        state.allItemList = state.allItemList.sort((a, b) => a.price - b.price);
      }
    },

    brandFilterHandler: (state, action) => {
      state.filteredBrandList = state.allBrandList.filter((item) =>
        action.payload.includes(item.brandName),
      );
    },

    getDumyImageIndex: (state, action: PayloadAction<number>) => {
      state.dumyImageIndex = action.payload;
    },
  },

  extraReducers: (builder) => {
    //getAllItemList
    builder.addCase(getAllItemList.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(getAllItemList.fulfilled, (state, action: PayloadAction<IallItemList[]>) => {
      state.isLoding = false;
      state.allItemList = action.payload;
    });
    builder.addCase(getAllItemList.rejected, (state) => {
      state.isLoding = false;
    });

    //getSingleItemList
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

    //allBrandList
    builder.addCase(getAllBrandList.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(getAllBrandList.fulfilled, (state, action) => {
      state.isLoding = false;
      state.allBrandList = action.payload;
    });
    builder.addCase(getAllBrandList.rejected, (state) => {
      state.isLoding = false;
    });

    //searchItemByBrand
    builder.addCase(searchItemByBrand.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(searchItemByBrand.fulfilled, (state, action) => {
      state.isLoding = false;
      state.allItemList = action.payload;
    });
    builder.addCase(searchItemByBrand.rejected, (state) => {
      state.isLoding = false;
    });

    //searchItemByCategory
    builder.addCase(searchItemByCategory.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(searchItemByCategory.fulfilled, (state, action) => {
      state.allItemList = action.payload;
      state.isLoding = false;
    });
    builder.addCase(searchItemByCategory.rejected, (state) => {
      state.isLoding = false;
    });

    //추후 결재쪽 슬라이드로 이동 예정
    builder.addCase(getZipCode.fulfilled, (state, action: PayloadAction<IsearchAddress[]>) => {
      if (action.payload === null) {
        alert('입력하신 우편번호를 조회 할 수 없습니다 다시 입력 해 주세요!');
      }
      state.searchAddress = action.payload;
    });
  },
});

export const {
  largeCategoryModalHandler,
  smallCategoryModalHandler,
  brandSelectBoxHandler,
  itemSortSelectBoxHandler,
  headerBarHandler,

  getDumyImageIndex,
  getNowPosition,

  itemSortHandler,
  brandFilterHandler,
} = itemSlice.actions;

export default itemSlice.reducer;
