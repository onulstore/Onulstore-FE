import React, { useState, Dispatch, SetStateAction } from 'react';
//STYLED
import * as S from './style';
//STORE
import { useItemSlice, useAppDispatch } from 'store/hooks';
import { itemSortSelectBoxHandler } from 'store/slices/itemSlice';
//ICONS
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons';
//COMPONENT
import FilterSelectBox from './FilterSelectBox/index';

const ItemSortSelectBox = () => {
  const dispatch = useAppDispatch();
  const { allItemList, isShowItemSortSelectBox } = useItemSlice();

  return (
    <S.CustomSelectBoxContainer
      onClick={() => {
        dispatch(itemSortSelectBoxHandler(!isShowItemSortSelectBox));
      }}
    >
      <p className="all-item">총 {allItemList.length}개</p>

      <div className="filter-bar">
        <p
          className="filter-bar-title"
          onClick={() => {
            dispatch(itemSortSelectBoxHandler(!isShowItemSortSelectBox));
          }}
        >
          상품 정렬
        </p>
        {isShowItemSortSelectBox ? <ArrowTopIcon /> : <ArrowBottomIcon />}
      </div>
      {isShowItemSortSelectBox && <FilterSelectBox />}
    </S.CustomSelectBoxContainer>
  );
};

export default ItemSortSelectBox;
