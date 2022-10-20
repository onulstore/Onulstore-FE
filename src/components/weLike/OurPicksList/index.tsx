import React from 'react';
import * as S from './style';
import { OurPicksSwiper } from 'components/home/Swiper/OurPicksSwiper';
import { OUR_PICKS, ITEMS } from 'utils/test_constants';
import { OurPicksItemCard } from 'components/item/SmallItemCards';

function OurPicksList({ data, index }: any) {
  return (
    <S.OurPicksList>
      <S.OurPicksDate>{data[index].createDate}</S.OurPicksDate>
      <OurPicksSwiper data={OUR_PICKS[index]} />
      <OurPicksItemCard data={ITEMS[index]} />
    </S.OurPicksList>
  );
}

export default OurPicksList;

// 백데이터 계산용
// (product.createdDate).slice(0,10).split('-')
// ('2022-09-21T00:13:20').slice(0,10).split('-')
