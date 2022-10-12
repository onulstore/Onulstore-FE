import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Item
export const useItemSlice = () => {
  const {
    isShowLargeCategoryModal,
    allItemList,
    singleItemList,
    isDetailPage,
    isLoding,
    searchAddress,
  } = useAppSelector((state) => state.item);
  return {
    isShowLargeCategoryModal,
    allItemList,
    singleItemList,
    isDetailPage,
    searchAddress,
    isLoding,
  };
};

//REVIEW
export const useReviewSlice = () => {
  const { base64Store, isLoding } = useAppSelector((state) => state.review);
  return { base64Store, isLoding };
};
//QnA
export const useQnASlice = () => {
  const {} = useAppSelector((state) => state.QnA);

  return {};
};
//CART
export const useCartSlice = () => {
  const { isLoding, userData } = useAppSelector((state) => state.cart);

  return { userData };
};
