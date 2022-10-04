import React from 'react';
import * as S from './style';
import { Title } from '../MyOrder/style';
import MyHistoryDetail from '../MyHistoryDetail';

function MyHistory() {
  return (
    <S.Container>
      <Title>
        <p className="text">내 활동 내역</p>
      </Title>
      <MyHistoryDetail route={'wishlist'} name={'위시리스트'} count={3} />
      <MyHistoryDetail route={'recent'} name={'최근 본 상품'} count={3} />
      <MyHistoryDetail route={''} name={'리뷰 내역'} count={3} />
      <MyHistoryDetail route={''} name={'문의 내역'} count={3} last />
    </S.Container>
  );
}

export default MyHistory;
