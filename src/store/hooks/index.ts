import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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

export const useReviewSlice = () => {
  const { base64Store, isLoding } = useAppSelector((state) => state.review);
  return { base64Store, isLoding };
};

export const useQnASlice = () => {
  const {} = useAppSelector((state) => state.QnA);
};
