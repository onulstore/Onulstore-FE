import React from 'react';
import { useTodayCountdown } from 'store/hooks/timeHooks';
import * as S from './style';

interface ShowCounterProps {
  hours: string;
  minutes: string;
  seconds: string;
  fontSize?: number;
}
interface TodayTimerProps {
  tomorrow: number[];
  fontSize?: number;
}

const ShowCounter = ({ hours, minutes, seconds, fontSize }: ShowCounterProps) => {
  return <S.ShowCounter fontSize={fontSize}>{`${hours}:${minutes}:${seconds}`}</S.ShowCounter>;
};

function TodayTimer({ tomorrow, fontSize }: TodayTimerProps) {
  const [hours, minutes, seconds] = useTodayCountdown(tomorrow);

  return (
    <ShowCounter
      fontSize={fontSize}
      hours={String(hours).padStart(2, '0')}
      minutes={String(minutes).padStart(2, '0')}
      seconds={String(seconds).padStart(2, '0')}
    />
  );
}

export default TodayTimer;
