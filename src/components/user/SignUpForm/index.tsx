import React, { useMemo } from 'react';
import FormInput from '../FormInput';
import { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signUpReg, SIGNUP_ERROR_MSG } from 'utils/constants';
import * as S from './style';
import LargeBtn from 'components/ui/LargeBtn';

type FormInputs = {
  id: string;
  pw: string;
  confirmPw: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  KanaFirstName: string;
  KanaLastName: string;
};

function SignUpForm() {
  const { register, reset, handleSubmit, setFocus, getValues, formState, trigger } =
    useForm<FormInputs>({
      mode: 'onChange',
    });

  const onSubmit: SubmitHandler<FormInputs> = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    setFocus('id', { shouldSelect: true });
  }, []);

  const signUpWidth = useMemo(() => 31.1, []);

  return (
    <>
      <S.Form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          isSignUp
          id={'id'}
          label={'아이디'}
          height={4}
          errorMsg={formState.errors['id']?.message}
          inputProps={{
            type: 'text',
            ...register('id', {
              pattern: {
                value: signUpReg.ID_REGEX,
                message: SIGNUP_ERROR_MSG.invalidId,
              },
              required: SIGNUP_ERROR_MSG.required,
            }),
          }}
        />

        <FormInput
          isSignUp
          id={'pw'}
          label={'비밀번호'}
          description="8~16자의 영문 대소문자와 숫자, 특수문자 조합"
          errorMsg={formState.errors['pw']?.message}
          inputProps={{
            type: 'password',
            autoComplete: 'off',
            formState: formState.isValid,
            ...register('pw', {
              pattern: {
                value: signUpReg.PW_REGEX,
                message: SIGNUP_ERROR_MSG.invalidPw,
              },
              required: SIGNUP_ERROR_MSG.required,
              onBlur: () => trigger('confirmPw'),
            }),
          }}
        />
        <FormInput
          isSignUp
          id={'confirmPw'}
          label={'비밀번호 확인'}
          errorMsg={formState.errors['confirmPw']?.message}
          inputProps={{
            type: 'password',
            autoComplete: 'off',
            ...register('confirmPw', {
              validate: {
                sameWithPw: (v) => v === getValues('pw') || SIGNUP_ERROR_MSG.invalidConfirmPw,
              },
              required: SIGNUP_ERROR_MSG.required,
            }),
          }}
        />

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
          id={'phone'}
          label={'휴대폰 번호'}
          description="하이픈이 없는 숫자로만 입력"
          errorMsg={formState.errors['phone']?.message}
          inputProps={{
            type: 'text',
            ...register('phone', {
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
            id={'firstName'}
            label={'이름 (성)'}
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
          <FormInput
            isSignUp
            width={signUpWidth / 2 - 0.6}
            id={'lastName'}
            label={'이름 (이름)'}
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
        </div>

        <div className="name-wapper">
          <FormInput
            isSignUp
            width={signUpWidth / 2 - 0.6}
            id={'KanaFirstName'}
            label={'카나 (성)'}
            errorMsg={formState.errors['KanaFirstName']?.message}
            inputProps={{
              type: 'text',
              ...register('KanaFirstName', {
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
            id={'KanaLastName'}
            label={'카나 (이름)'}
            errorMsg={formState.errors['KanaLastName']?.message}
            inputProps={{
              type: 'text',
              ...register('KanaLastName', {
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
          <a href="" title="이용규약">
            이용규약
          </a>
          과
          <a href="" title="프라이버시정책">
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
