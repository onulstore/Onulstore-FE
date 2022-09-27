import React, { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './style';
import FormInput from '../FormInput';
import LargeBtn from 'components/ui/LargeBtn';
import { GoogleIcon } from 'components/Icons';
type FormInputs = {
  id: string;
  pw: string;
};

function SignInForm() {
  const { register, handleSubmit, setFocus, formState } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    setFocus('id', { shouldSelect: true });
  }, []);

  return (
    <>
      <S.Form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <S.GapWrapper>
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
