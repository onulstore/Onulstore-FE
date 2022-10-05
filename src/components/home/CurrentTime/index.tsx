import React from 'react';
import { useCurrentTime } from 'store/hooks/useCurrentTime';
import { FontStyleProps, ShowTimeProps } from '../home';
import * as S from './style';

const ShowTime = (props: ShowTimeProps) => {
  return <S.ShowTime>{`${props.hours}:${props.minutes}:${props.seconds}`}</S.ShowTime>;
};

export const CurrentTime = (props: FontStyleProps) => {
  const [hours, minutes, seconds] = useCurrentTime();

  return (
    <ShowTime
      {...props}
      hours={String(hours).padStart(2, '0')}
      minutes={String(minutes).padStart(2, '0')}
      seconds={String(seconds).padStart(2, '0')}
    />
  );
};

export default CurrentTime;
