import React from 'react';
import { useCurrentTime } from 'store/hooks/useCurrentTime';
import { LeftHurryIcon } from 'components/Icons';
import * as S from './style';
import { ShowProgressBarProps, TodayTimerProgressBarProps } from '../home';

const ShowProgressBar = (props: ShowProgressBarProps) => {
  return (
    <S.BaseBar>
      <S.InnerBar width={props.width} color={props.color}>
        <LeftHurryIcon />
      </S.InnerBar>
    </S.BaseBar>
  );
};

const TodayTimerProgressBar = (props: TodayTimerProgressBarProps) => {
  const [hours, minutes, seconds] = useCurrentTime();
  const currentValue = hours * 60 * 60 + minutes * 60 + seconds;
  const maxValue = 24 * 60 * 60; // 24시간 === 86400초
  const currentProgress = (currentValue / maxValue) * 100;

  return <ShowProgressBar width={currentProgress} color={props.color} />;
};

export default TodayTimerProgressBar;
