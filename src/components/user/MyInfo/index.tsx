import React from 'react';
import MyInfoForm from '../MyInfoForm';
import * as S from './style';

function MyInfo() {
  return (
    <S.Container>
      <MyInfoForm name={'아즈마 미유키'} btn={'회원정보 관리'} />
      <S.Hr />
      <MyInfoForm label={'포인트'} content={'500P'} btn={'내 포인트 현황'} />
      <MyInfoForm label={'쿠폰'} content={'3개'} btn={'내 쿠폰 보기'} />
    </S.Container>
  );
}

export default MyInfo;
