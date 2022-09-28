import { useEffect, useState } from 'react';
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

export const useTodayCountdown = (tomorrow: number[]) => {
  const [year, month, date] = tomorrow;
  // 년, 월, 일 number 값을 new Date의 setting 값으로 입력해야 해당 날짜의 정각으로 설정됨
  const countDownDate = new Date(year, month, date).getTime();

  const [countdown, setCountdown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countdown);
};

const getReturnValues = (countdown: number) => {
  const hours = Math.floor((countdown / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((countdown / (60 * 1000)) % 60);
  const seconds = Math.floor((countdown / 1000) % 60);

  if (hours + minutes + seconds <= 0) {
    return [0, 0, 0];
  } else {
    return [hours, minutes, seconds];
  }
};
