import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import testSlice from '../reducers/testSlice';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTestSlice = () => {
  const count = useAppSelector((state) => state.test.count);
  const isLoading = useAppSelector((state) => state.test.isLoding);
  const testList = useAppSelector((state) => state.test.testList);
  return { count, isLoading, testList };
};
