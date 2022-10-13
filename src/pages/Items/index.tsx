import React, { useState, useEffect } from 'react';
import { useItemSlice, useAppDispatch } from 'store/hooks';
import { getAllItemList } from 'utils/Api/itemApi';
import { IallItemList } from 'store/slices/itemSlice';
//COMPONENTS
import NowPositionBar from 'components/item/NowPositionBar';
import ItemFilterBar from 'components/item/ItemFilterBar';
import FilterSelectBox from 'components/item/CustomSelectBox/FilterSelectBox';
import ItemAlbum from 'components/item/ItemAlbum/index';
import LargeCategoryModal from 'components/item/LargeCategoryModal';
import Spinner from 'components/ui/Loading';

// STYLED
import * as S from './style';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';

//DUMY
const Items = () => {
  const [isShowFilterSelectBox, setIsShowFilterSelectBox] = useState(false);
  const dispatch = useAppDispatch();
  const { allItemList, isShowLargeCategoryModal, isLoding } = useItemSlice();

  useEffect(() => {
    dispatch(getAllItemList());
  }, []);

  return (
    <S.ItemsContainer>
      {isLoding && <Spinner />}
      {isShowLargeCategoryModal && <LargeCategoryModal />}
      <NowPositionBar />
      <ItemFilterBar
        //select박스 on/off에 필요한 데이터, 전역으로 함수와 state를 만들면 편하지만 전역적으로 사용 할 일이 없어서 Props 전달로 구현
        filterSeletBoxHandler={setIsShowFilterSelectBox}
        isShowFilterSelectBox={isShowFilterSelectBox}
      />
      {isShowFilterSelectBox && <FilterSelectBox />}
      <S.ItemBox>
        {allItemList?.length > 0 &&
          allItemList.map((item: IallItemList, index) => {
            return <ItemAlbum key={item.id} item={item} index={index} ranking />;
          })}
      </S.ItemBox>
    </S.ItemsContainer>
  );
};

export default SetHeaderBar(SetBottomTabBar(Items));
