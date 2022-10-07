import React, { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './style';
import FormInput from '../FormInput';
import LargeBtn from 'components/ui/LargeBtn';
import { GoogleIcon } from 'components/Icons';
import { signUpReg, SIGNUP_ERROR_MSG } from 'utils/constants';
import { useCookies } from 'react-cookie';
import api from 'utils/Api';

type FormInputs = {
  email: string;
  password: string;
};

function SignInForm() {
  const [cookies, setCookie, removeCookie] = useCookies();

  const { register, handleSubmit, setFocus, formState } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = useCallback(async (data) => {
    console.log(data);
    const res = await api({
      url: '/auth/login',
      method: 'POST',
      data,
    });
    setCookie('accessToken', res.data.accessToken, { path: '/' });
    console.log(res);
    alert('로그인 되었습니다.');
  }, []);

  useEffect(() => {
    setFocus('email', { shouldSelect: true });
  }, []);

  return (
    <>
      <S.Form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <S.GapWrapper>
          <FormInput
            id={'email'}
            label={'이메일'}
            height={5}
            errorMsg={formState.errors['email']?.message}
            inputProps={{
              type: 'text',
              placeholder: '이메일',
              ...register('email', {
                pattern: {
                  value: signUpReg.EMAIL_REGEX,
                  message: SIGNUP_ERROR_MSG.invalidEmail,
                },
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
          <FormInput
            id={'password'}
            label={'비밀번호'}
            height={5}
            errorMsg={formState.errors['password']?.message}
            inputProps={{
              type: 'password',
              placeholder: '비밀번호',
              autoComplete: 'off',
              formState: formState.isValid,
              ...register('password', {
                //추후 보완
                // pattern: {
                //   value: signInReg.PW_REGEX,
                //   message: SIGNUP_ERROR_MSG.invalidPw,
                // },
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
        </S.GapWrapper>
        <S.GapWrapper>
          <LargeBtn type="submit">로그인</LargeBtn>
          <LargeBtn font color="#F5F5F5">
            <GoogleIcon />
            <p>Google 계정으로 로그인</p>
          </LargeBtn>
        </S.GapWrapper>
        <hr />
      </S.Form>
    </>
  );
}

export default SignInForm;
