import React from 'react';
import * as S from './style';
//STORE
import { searchItemByBrand } from 'utils/Api/itemApi';
import { useAppDispatch, useItemSlice } from 'store/hooks/index';
interface Props {
  item: any;
}

const BrandSelectBoxElement = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <S.BrandSelectBoxElementContainer
      onClick={() => {
        dispatch(searchItemByBrand(item.id));
      }}
    >
      {item.brandName}
    </S.BrandSelectBoxElementContainer>
  );
};

export default BrandSelectBoxElement;
