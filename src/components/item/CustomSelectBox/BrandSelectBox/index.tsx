import React, { useEffect, useState } from 'react';
//STYLED
import * as S from './style';
//ICONS
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons';
//STORE
import { useItemSlice, useAppDispatch } from 'store/hooks/index';
import { brandFilterHandler, brandSelectBoxHandler } from 'store/slices/itemSlice';
//API
import { getAllBrandList } from 'utils/Api/itemApi';
//COMPONENTS
import BrandSelectBoxElement from './BrandSelectBoxElement/index';
const BrandSelectBox = () => {
  const dispatch = useAppDispatch();

  const { filteredBrandList, allBrandList, isShowBrandSelectdBox } = useItemSlice();

  useEffect(() => {
    dispatch(getAllBrandList());
    dispatch(
      brandFilterHandler([
        'Around ann',
        'meeLabs',
        'Deep Roller',
        'Lukta',
        'CHIRO CARE',
        'Dr.esthe',
      ]),
    );
  }, []);

  return (
    <S.BrandSelectBoxContainer
      onClick={() => {
        dispatch(brandSelectBoxHandler(!isShowBrandSelectdBox));
      }}
    >
      <p
        onClick={() => {
          dispatch(brandSelectBoxHandler(!isShowBrandSelectdBox));
        }}
        className="brand-select-box-title"
      >
        브랜드
      </p>
      {isShowBrandSelectdBox ? (
        <span className="brand-select-box-icon">
          <ArrowTopIcon />
        </span>
      ) : (
        <span className="brand-select-box-icon">
          <ArrowBottomIcon />
        </span>
      )}

      <div className="brand-select-box-element-container">
        {isShowBrandSelectdBox &&
          filteredBrandList?.map((item) => {
            return <BrandSelectBoxElement item={item} key={item.id} />;
          })}
        {filteredBrandList.length === 0 &&
          isShowBrandSelectdBox &&
          allBrandList?.map((item) => {
            return <BrandSelectBoxElement item={item} key={item.id} />;
          })}
      </div>
    </S.BrandSelectBoxContainer>
  );
};

export default BrandSelectBox;
