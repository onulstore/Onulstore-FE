import React from 'react';
import { useTodayCountdown } from 'store/hooks';

interface ShowCounterProps {
  hours: string;
  minutes: string;
  seconds: string;
}
const ShowCounter = ({ hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div>
      <div>{`${hours}:${minutes}:${seconds}`}</div>
    </div>
  );
};

function TodayTimer({ tomorrow }: any) {
  const [hours, minutes, seconds] = useTodayCountdown(tomorrow);

  return (
    <ShowCounter
      hours={String(hours).padStart(2, '0')}
      minutes={String(minutes).padStart(2, '0')}
      seconds={String(seconds).padStart(2, '0')}
    />
  );
}

export default TodayTimer;
