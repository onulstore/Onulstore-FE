import React from 'react';
import * as S from './style';
import { ShoppingBagIcon } from 'components/Icons';
const WishListBtn = () => {
  return (
    <S.WishListBtnContainer>
      <ShoppingBagIcon width="3rem" height="3rem" color="#fff" />
    </S.WishListBtnContainer>
  );
};

export default WishListBtn;
