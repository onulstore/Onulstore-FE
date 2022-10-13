import React from 'react';
import * as S from './style';
import theme from 'style/theme';
import CurrentTime from '../CurrentTime';
import { TodayDate } from '../Date';

function TodayTimeBar() {
  return (
    <S.TimeBar>
      <div className="today-date">
        <TodayDate fontFamily="Pretendard" color={theme.palette.darkGrey} />
      </div>
      <div className="current-time">
        <CurrentTime color={theme.palette.darkGrey} />
      </div>
      <span>TOKYO & SEOUL </span>
    </S.TimeBar>
  );
}

export default TodayTimeBar;
