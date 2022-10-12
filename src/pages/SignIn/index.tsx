import SignInForm from 'components/user/SignInForm';
import React, { useEffect } from 'react';
import * as S from './style';
import { LogoIcon } from 'components/Icons';
import LargeBtn from 'components/ui/LargeBtn';
import theme from 'style/theme';
import { useLocation, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  // 회원가입에서 넘어왔을때만!
  // const location = useLocation();
  // const referrer = document.referrer;
  // if (location.state.data) {
  //   const res = location.state.data;
  //   console.log(res);
  // } else {
  //   console.log('로그인 한적 있음');
  // }
  // useEffect(() => {
  //   console.log(referrer);
  // }, []);
  return (
    <div>
      <S.Greeting>
        <LogoIcon color={theme.palette.black} width={'115'} height={'19.78'} />
        <S.Text>
          <div className="greeting">WECOME TO</div>
          <div className="greeting"> ONUL STORE</div>
        </S.Text>
      </S.Greeting>
      <SignInForm />

      <S.BtnWrapper>
        <LargeBtn
          font
          color="#6C6C6C"
          onClick={() => {
            navigate('/signup');
          }}
        >
          신규회원가입
        </LargeBtn>
        <LargeBtn font color="#F5F5F5">
          이메일 찾기
        </LargeBtn>
        <LargeBtn
          font
          color="#F5F5F5"
          onClick={() => {
            navigate('/non-member');
          }}
        >
          비회원 주문조회
        </LargeBtn>
      </S.BtnWrapper>
    </div>
  );
}

export default SignIn;
