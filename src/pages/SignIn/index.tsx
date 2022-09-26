import SignInForm from 'components/user/SignInForm';
import React from 'react';
import * as S from './style';
import { LogoIcon } from 'components/Icons';

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
    </div>
  );
}

export default SignIn;
