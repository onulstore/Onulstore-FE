import React from 'react';
import MyInfo from 'components/user/MyInfo';
import MyOrder from 'components/user/MyOrder';
import * as S from './style';
import MyHistory from 'components/user/MyHistory';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import LargeBtn from 'components/ui/LargeBtn';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import theme from 'style/theme';

function MyPage() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const logOut = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    navigate(0); // 새로고침
  };
  return (
    <S.Container>
      <MyInfo />
      <MyOrder />
      <MyHistory />
      <div className="btn">
        <LargeBtn
          width={33.5}
          height={5}
          color={theme.palette.whiteGrey}
          borderRadius={0.5}
          onClick={() => logOut()}
        >
          로그아웃
        </LargeBtn>
      </div>
    </S.Container>
  );
}

export default SetHeaderBar(SetBottomTabBar(MyPage));
