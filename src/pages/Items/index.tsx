import React, { useState, useEffect } from 'react';
import { useItemSlice, useAppDispatch } from 'store/hooks';
import { getItem } from 'utils/Api/dumy/dumyApi';
import { AllItemList } from 'store/slices/itemSlice';
//COMPONENT
import LargeCategoryModal from 'components/item/LargeCategoryModal';
import NowPositionBar from 'components/item/NowPositionBar';
import ItemFilterBar from 'components/item/ItemFilterBar';
import FilterSelectBox from 'components/item/CustomSelectBox/FilterSelectBox';
import ItemAlbum from 'components/item/ItemAlbum/index';
// Styled
import * as S from './style';
const index = () => {
  const [isShowFilterSelectBox, setIsShowFilterSelectBox] = useState(false);

  const dispatch = useAppDispatch();
  const { allItemList } = useItemSlice();

  useEffect(() => {
    dispatch(getItem());
  }, []);

  return (
    <S.ItemsContainer>
      <NowPositionBar />
      <ItemFilterBar
        //select박스 on/off에 필요한 데이터, 전역으로 함수와 state를 만들면 편하지만 전역적으로 사용 할 일이 없어서 Props 전달로 구현
        filterSeletBoxHandler={setIsShowFilterSelectBox}
        isShowFilterSelectBox={isShowFilterSelectBox}
      />
      {isShowFilterSelectBox && <FilterSelectBox />}
      <S.ItemBox>
        {allItemList?.length > 0 &&
          allItemList.map((item: AllItemList) => {
            return <ItemAlbum key={item.id} item={item} />;
          })}
      </S.ItemBox>
    </S.ItemsContainer>
  );
};

export default index;
