import SignInForm from 'components/user/SignInForm';
import React from 'react';
import * as S from './style';
import { LogoIcon } from 'components/Icons';
import LargeBtn from 'components/ui/LargeBtn';

function SignIn() {
  return (
    <div>
      <S.Greeting>
        <LogoIcon color={'#2F2F33'} width={'115'} height={'19.78'} />
        <S.Text>
          <div className="greeting">WECOME TO</div>
          <div className="greeting"> ONUL STORE</div>
        </S.Text>
      </S.Greeting>
      <SignInForm />

      <S.BtnWrapper>
        <LargeBtn font color="#6C6C6C">
          신규회원가입
        </LargeBtn>
        <LargeBtn font color="#F5F5F5">
          비밀번호 재설정
        </LargeBtn>
        <LargeBtn font color="#F5F5F5">
          아이디/이메일 찾기
        </LargeBtn>
        <LargeBtn font color="#F5F5F5">
          비회원 주문조회
        </LargeBtn>
      </S.BtnWrapper>
    </div>
  );
}

export default SignIn;
