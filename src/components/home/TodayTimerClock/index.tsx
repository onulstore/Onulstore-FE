import { TimerIcon } from 'components/Icons';
import React from 'react';
import { TodayDate } from '../Date';
import { getTomorrowDate } from '../Date/getDate';
import TodayTimer from '../TodayTimer';
import TodayTimerProgressBar from '../TodayTimerProgressBar';
import * as S from './style';

function TodayTimerClock() {
  return (
    <>
      <S.TodayTimerClock>
        <S.TimeContainer>
          <div>
            <TimerIcon />
            <TodayDate fontSize={2} fontWeight={400} color={'#fff'} />
          </div>
          <TodayTimer tomorrow={getTomorrowDate()} />
        </S.TimeContainer>
        <div className="progress-bar">
          <TodayTimerProgressBar innerColor="#FF5A50" className="home" />
        </div>
      </S.TodayTimerClock>
    </>
  );
}

export default TodayTimerClock;
