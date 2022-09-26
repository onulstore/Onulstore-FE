import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useItemSlice = () => {
  const { isShowLargeCategoryModal, allItemList, isDetailPage } = useAppSelector(
    (state) => state.item,
  );
  return { isShowLargeCategoryModal, allItemList, isDetailPage };
};
