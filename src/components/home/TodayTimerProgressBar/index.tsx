import React from 'react';
import { useCurrentTime } from 'store/hooks/useCurrentTime';
import { LeftHurryIcon, WhiteHurryIcon } from 'components/Icons';
import * as S from './style';
import { ShowProgressBarProps, TodayTimerProgressBarProps } from '../home';

const ShowProgressBar = (props: ShowProgressBarProps) => {
  return (
    <S.BaseBar baseColor={props.baseColor}>
      <S.InnerBar width={props.width} innerColor={props.innerColor}>
        {props.className !== 'home' ? <S.WhiteHurry /> : <S.LeftHurry />}
      </S.InnerBar>
    </S.BaseBar>
  );
};

const TodayTimerProgressBar = (props: TodayTimerProgressBarProps) => {
  const [hours, minutes, seconds] = useCurrentTime();
  const currentValue = hours * 60 * 60 + minutes * 60 + seconds; // 현재 시간 초로 변환
  const maxValue = 24 * 60 * 60; // 24시간 === 86400초
  const currentProgress = (currentValue / maxValue) * 100;

  return (
    <ShowProgressBar
      className={props.className}
      width={currentProgress}
      baseColor={props.baseColor}
      innerColor={props.innerColor}
    />
  );
};

export default TodayTimerProgressBar;