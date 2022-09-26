import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import FormInput from '../FormInput';
import LargeBtn from 'components/ui/LargeBtn';
import { GoogleIcon } from 'components/Icons';
type FormInputs = {
  id: string;
  pw: string;
  confirmPw: string;
  email: string;
  phone: string;
};

function SignInForm() {
  const { register, reset, handleSubmit, setFocus, getValues, formState, trigger } =
    useForm<FormInputs>({
      mode: 'onBlur',
    });

  const onSubmit = useCallback(() => {}, []);

  useEffect(() => {
    setFocus('id', { shouldSelect: true });
  }, []);

  return (
    <>
      <S.Form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id={'id'}
          label={'아이디'}
          height={5}
          errorMsg={formState.errors['id']?.message}
          inputProps={{
            type: 'text',
            placeholder: '아이디 또는 이메일',
            ...register('id', {
              // pattern: {
              //   value: ID_REGEX,
              //   message: ERROR_MSG.invalidId,
              // },
              // required: ERROR_MSG.required,
            }),
          }}
        />
        <FormInput
          id={'pw'}
          label={'비밀번호'}
          height={5}
          errorMsg={formState.errors['pw']?.message}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호',
            autoComplete: 'off',
            formState: formState.isValid,
            ...register('pw', {
              // pattern: {
              //   value: PW_REGEX,
              //   message: ERROR_MSG.invalidPw,
              // },
              // required: ERROR_MSG.required,
            }),
          }}
        />
        <LargeBtn type="submit">로그인</LargeBtn>
        <LargeBtn font color="#F5F5F5">
          <GoogleIcon />
          <p>Google 계정으로 로그인</p>
        </LargeBtn>
        <hr />
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
      </S.Form>
    </>
  );
}

export default SignInForm;
