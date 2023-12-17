import React, { useEffect } from 'react';
import { useItemSlice, useAppDispatch } from 'store/hooks';
import { getAllItemList } from 'utils/Api/itemApi';
import { IallItemList } from 'store/slices/itemSlice';

//COMPONENTS
import ItemSortSelectBox from 'components/item/CustomSelectBox/ItemSortSelectBox';
import BrandSelectBox from 'components/item/CustomSelectBox/BrandSelectBox';
import NowPositionBar from 'components/item/NowPositionBar';
import ItemAlbum from 'components/item/ItemAlbum/index';
import LargeCategoryModal from 'components/item/LargeCategoryModal';
import SmallCategoryModal from 'components/item/SmallCategoryModal';
import Spinner from 'components/ui/Loading';

// STYLED
import * as S from './style';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';

//DUMY
const Items = () => {
  const dispatch = useAppDispatch();
  const { allItemList, isShowLargeCategoryModal, isShowSmallCategoryModal, isLoding } =
    useItemSlice();

  useEffect(() => {
    dispatch(getAllItemList());
  }, []);

  return (
    <S.ItemsContainer>
      {isLoding && <Spinner />}
      {isShowLargeCategoryModal && <LargeCategoryModal />}
      {isShowSmallCategoryModal && <SmallCategoryModal />}
      <NowPositionBar />
      <ItemSortSelectBox />
      <BrandSelectBox />

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
