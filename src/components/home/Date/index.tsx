import React from 'react';
import { getTodayDate } from './getDate';
import * as S from './style';
import { ShowDateProps, DateProps } from '../home';

const ShowDate = (props: ShowDateProps) => {
  return <S.ShowDate {...props}>{`${props.year}.${props.month}.${props.date}`}</S.ShowDate>;
};

export const TodayDate = (props: DateProps) => {
  const [year, month, date] = getTodayDate();
  return (
    <ShowDate
      {...props}
      year={String(year).padStart(2, '0')}
      month={String(month).padStart(2, '0')}
      date={String(date).padStart(2, '0')}
    />
  );
};
