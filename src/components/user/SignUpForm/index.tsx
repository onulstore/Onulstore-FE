import React, { useMemo } from 'react';
import FormInput from '../FormInput';
import { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signUpReg, SIGNUP_ERROR_MSG } from 'utils/constants';
import * as S from './style';
import LargeBtn from 'components/ui/LargeBtn';
import api from 'utils/Api';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNum: string;
  firstName: string;
  lastName: string;
  firstKana: string;
  lastKana: string;
};

function SignUpForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, setFocus, getValues, formState, trigger } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormInputs> = useCallback(async (data) => {
    console.log(data);

    const res = await api({
      url: 'auth/signup',
      method: 'POST',
      data,
    });

    if (
      confirm(
        res.data.lastName +
          res.data.firstName +
          `님 회원가입을 축하드립니다. \n 로그인으로 이동할까요?`,
      )
    ) {
      navigate('/login', { state: { data } });
    } else {
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    setFocus('email', { shouldSelect: true });
  }, []);

  const signUpWidth = useMemo(() => 31.1, []);

  return (
    <>
      <S.Form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          isSignUp
          id={'email'}
          label={'이메일 주소'}
          errorMsg={formState.errors['email']?.message}
          inputProps={{
            type: 'text',
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
          isSignUp
          id={'password'}
          label={'비밀번호'}
          description="8~16자의 영문 대소문자와 숫자, 특수문자 조합"
          errorMsg={formState.errors['password']?.message}
          inputProps={{
            type: 'password',
            autoComplete: 'off',
            formState: formState.isValid,
            ...register('password', {
              pattern: {
                value: signUpReg.PW_REGEX,
                message: SIGNUP_ERROR_MSG.invalidPw,
              },
              required: SIGNUP_ERROR_MSG.required,
              onBlur: () => trigger('passwordConfirm'),
            }),
          }}
        />
        <FormInput
          isSignUp
          id={'passwordConfirm'}
          label={'비밀번호 확인'}
          errorMsg={formState.errors['passwordConfirm']?.message}
          inputProps={{
            type: 'password',
            autoComplete: 'off',
            ...register('passwordConfirm', {
              validate: {
                sameWithPw: (v) => v === getValues('password') || SIGNUP_ERROR_MSG.invalidConfirmPw,
              },
              required: SIGNUP_ERROR_MSG.required,
            }),
          }}
        />

        <FormInput
          isSignUp
          id={'phoneNum'}
          label={'휴대폰 번호'}
          description="하이픈이 없는 숫자로만 입력"
          errorMsg={formState.errors['phoneNum']?.message}
          inputProps={{
            type: 'text',
            ...register('phoneNum', {
              pattern: {
                value: signUpReg.PHONE_REGEX,
                message: SIGNUP_ERROR_MSG.invalidPhone,
              },
              required: SIGNUP_ERROR_MSG.required,
            }),
          }}
        />

        {/* 이름 */}
        <div className="name-wapper">
          <FormInput
            isSignUp
            width={signUpWidth / 2 - 0.6}
            id={'lastName'}
            label={'이름 (성)'}
            errorMsg={formState.errors['lastName']?.message}
            inputProps={{
              type: 'text',
              ...register('lastName', {
                pattern: {
                  value: signUpReg.NAME_REGEX,
                  message: SIGNUP_ERROR_MSG.invalidName,
                },
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
          <FormInput
            isSignUp
            width={signUpWidth / 2 - 0.6}
            id={'firstName'}
            label={'이름 (이름)'}
            errorMsg={formState.errors['firstName']?.message}
            inputProps={{
              type: 'text',
              ...register('firstName', {
                pattern: {
                  value: signUpReg.NAME_REGEX,
                  message: SIGNUP_ERROR_MSG.invalidName,
                },
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
        </div>

        <div className="name-wapper">
          <FormInput
            isSignUp
            width={signUpWidth / 2 - 0.6}
            id={'lastKana'}
            label={'카나 (성)'}
            errorMsg={formState.errors['lastKana']?.message}
            inputProps={{
              type: 'text',
              ...register('lastKana', {
                pattern: {
                  value: signUpReg.NAME_REGEX,
                  message: SIGNUP_ERROR_MSG.invalidName,
                },
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
          <FormInput
            isSignUp
            width={signUpWidth / 2 - 0.6}
            id={'firstKana'}
            label={'카나 (이름)'}
            errorMsg={formState.errors['firstKana']?.message}
            inputProps={{
              type: 'text',
              ...register('firstKana', {
                pattern: {
                  value: signUpReg.NAME_REGEX,
                  message: SIGNUP_ERROR_MSG.invalidName,
                },
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
        </div>

        <S.Terms>
          아래의 회원가입 버튼을 누르면,
          <br />
          <a onClick={() => navigate('/terms-of-service')} title="이용규약">
            이용규약
          </a>
          과
          <a onClick={() => navigate('/privacy-policy')} title="프라이버시정책">
            프라이버시 정책
          </a>
          에 동의한 것이 됩니다.
        </S.Terms>
        <LargeBtn type="submit">회원가입</LargeBtn>
      </S.Form>
    </>
  );
}

export default SignUpForm;
