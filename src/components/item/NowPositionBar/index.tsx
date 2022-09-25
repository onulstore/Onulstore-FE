import React from 'react';
import * as S from './style';
import { CategoryArrowRightIcon } from '../../Icons';
const index = () => {
  return (
    <S.NowPositionBarContainer>
      <p className="text">ALL</p>
      <CategoryArrowRightIcon />
    </S.NowPositionBarContainer>
  );
};

export default index;
