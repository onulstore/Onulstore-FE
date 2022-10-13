import React from 'react';
//STYLED
import * as S from './style';
//Dumy
import { itemDumyImg } from 'assets/dumyImg';
// STORE
import { useItemSlice } from 'store/hooks';

const ItemInfo = () => {
  const { dumyImageIndex } = useItemSlice();

  return (
    <S.ItemInfoContainer>
      <img src={itemDumyImg[dumyImageIndex]?.itemDetail1} className="img-box" />
      <img src={itemDumyImg[dumyImageIndex]?.itemDetail2} className="img-box" />
      <img src={itemDumyImg[dumyImageIndex]?.itemDetail3} className="img-box" />
    </S.ItemInfoContainer>
  );
};

export default ItemInfo;
