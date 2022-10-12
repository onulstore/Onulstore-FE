import React from 'react';
import MyInfo from 'components/user/MyInfo';
import MyOrder from 'components/user/MyOrder';
import * as S from './style';
import MyHistory from 'components/user/MyHistory';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';

function MyPage() {
  return (
    <S.Container>
      <MyInfo />
      <MyOrder />
      <MyHistory />
    </S.Container>
  );
}

export default SetHeaderBar(SetBottomTabBar(MyPage));
