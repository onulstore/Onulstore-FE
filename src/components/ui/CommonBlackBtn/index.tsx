import React from 'react';
import * as S from './style';

interface Props {
  width: string;
  height: string;
  title: string;
}

const CommonBlackBtn = ({ width, height, title }: Props) => {
  return (
    <S.PurchaseBtnContainer width={width} height={height}>
      {title}
    </S.PurchaseBtnContainer>
  );
};

export default CommonBlackBtn;
