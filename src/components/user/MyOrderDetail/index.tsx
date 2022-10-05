import React from 'react';
import * as S from './style';

interface Props {
  count: number;
  description: string;
  point?: boolean;
}

function MyOrderDetail({ count, description, point }: Props) {
  return (
    <S.Box count={count} point={point}>
      <p className="count">{count}</p>
      <p className="description">{description}</p>
    </S.Box>
  );
}

export default MyOrderDetail;
