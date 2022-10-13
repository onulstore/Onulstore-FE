import React, { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './style';
import FormInput from '../FormInput';
import LargeBtn from 'components/ui/LargeBtn';
import { GoogleIcon } from 'components/Icons';
import { signUpReg, SIGNUP_ERROR_MSG } from 'utils/constants';
import { useCookies } from 'react-cookie';
import api from 'utils/Api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setUserInfo } from 'store/slices/userSlice';

type FormInputs = {
  email: string;
  password: string;
};

function SignInForm() {
  const [, setCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const { register, handleSubmit, setFocus, formState } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = useCallback(async (inputvalue) => {
    console.log(inputvalue);
    const res = await api({
      url: '/auth/login',
      method: 'POST',
      data: inputvalue,
    });
    setCookie('accessToken', res.data.accessToken, { path: '/' });
    setCookie('refreshToken', res.data.refreshToken, { path: '/' });
    // console.log(res);
    alert('로그인 되었습니다.');

    const membersRes = await api({
      url: 'members',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${res.data.accessToken}`,
      },
    });
    const userInfo = membersRes.data;
    console.log('user', userInfo);
    dispatch(setUserInfo(userInfo));

    navigate(-1);
  }, []);

  const googleLogin = async () => {
    const res = await api({
      url: 'oauth2/authorization/google',
      method: 'GET',
    });
    console.log(res);
  };
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
          <LargeBtn font color="#F5F5F5" onClick={() => googleLogin()}>
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
