import React, { useState, useEffect } from 'react';
import { useItemSlice, useAppDispatch } from 'store/hooks';
import { getAllItemList } from 'utils/Api/itemApi';
import { IallItemList } from 'store/slices/itemSlice';
import * as S from './style';
import ItemAlbum from 'components/item/ItemAlbum/index';

function TodayTrend() {
  const dispatch = useAppDispatch();
  const { allItemList } = useItemSlice();

  useEffect(() => {
    dispatch(getAllItemList());
  }, []);
  const rankingItems = allItemList?.slice(0, 6);
  return (
    <S.ItemsContainer>
      <S.ItemBox>
        {rankingItems?.length > 0 &&
          rankingItems.map((item: IallItemList, index) => {
            return <ItemAlbum key={item.id} item={item} index={index} ranking />;
          })}
      </S.ItemBox>
    </S.ItemsContainer>
  );
}

export default TodayTrend;
