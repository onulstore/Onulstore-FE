import React from 'react';
import * as S from './style';

interface Props {
  count: number;
  description: string;
}

function MyOrderCancel({ count, description }: Props) {
  return (
    <S.Box count={count}>
      <p className="description">{description}</p>
      <p className="count">{count}</p>
    </S.Box>
  );
}

export default MyOrderCancel;
