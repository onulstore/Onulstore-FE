import React, { useEffect, useState } from 'react';
//STYLED
import * as S from './style';
// REACT-HOOK-FORM
import { useForm } from 'react-hook-form';
//api
import { getZipCode } from 'utils/Api/dumy/dumyApi';
//slice
import { useItemSlice, useAppDispatch } from 'store/hooks/index';
//components
import PaymentBtn from 'components/ui/CommonBlackBtn';
interface Iregister {
  originFirstName: string;
  originLastName: string;
  kanaFirstName: string;
  kanaLastName: string;
  userPhoneNumber: string;
  userEmail: string;
  deliveryMessage: string;
  zipCodeNumber: string;
  mainAddress: string;
  detailAddress: string;
}

const PaymentForm = () => {
  const { searchAddress } = useItemSlice();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
  } = useForm<Iregister>({ mode: 'onChange' });

  const onSubmit = (data: Iregister) => console.log(data);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  const zipCodeNumberObserver = watch('zipCodeNumber', '');

  const errorObserver = (target: string): string => {
    return Object.keys(errors).includes(target) ? '0.1rem solid #ff0000' : '0.1rem solid #CFCFCF';
  };

  const getAddress = () => {
    dispatch(getZipCode(zipCodeNumberObserver));
  };

  useEffect(() => {
    setFocus('originFirstName');
  }, []);

  const requireMsg = {
    firstNameError: '성을 입력 해 주세요!',
    lastNameError: '이름을 입력 해 주세요!',
    phoneError: '휴대폰 번호를 입력 해 주세요!',
    emailError: '이메일을 입력 해 주세요!',
    zipCodeNumberError: '우편번호를 입력 해 주세요!',
    detailAddressError: '상세주소를 입력 해 주세요!',
  };

  return (
    <S.PaymentFormContainer errorObserver={errorObserver}>
      <form className="delivery-info-form" onSubmit={formHandler} autoComplete="off">
        {/* 사용자의 이름을 입력받는 영역 */}
        <section className="origin-name-section">
          <div className="origin-first-name-container">
            <label htmlFor="originFirstName">이름 (성)</label>
            <input
              className="first-name"
              type="text"
              {...register('originFirstName', {
                required: true,
                maxLength: {
                  value: 2,
                  message: '2자리 이하로 입력 해 주세요!',
                },

                pattern: {
                  value: /^[가-힣]+$/,
                  message: '잘못된 형식의 성 입니다!',
                },
              })}
            />
            {errors.originFirstName?.type === 'required' && (
              <p className="error-msg">{requireMsg.firstNameError}</p>
            )}
            {errors.originFirstName && (
              <p className="error-msg">{`${errors.originFirstName.message}`}</p>
            )}
          </div>

          <div className="origin-last-name-container">
            <label htmlFor="originLastName">이름 (이름)</label>
            <input
              className="last-name"
              type="text"
              {...register('originLastName', {
                required: true,
                maxLength: {
                  value: 2,
                  message: '2자리 이하로 입력 해 주세요!',
                },
                pattern: {
                  value: /^[가-힣]+$/,
                  message: '잘못된 형식의 이름 입니다!',
                },
              })}
            />
            {errors.originLastName?.type === 'required' && (
              <p className="error-msg">{requireMsg.lastNameError}</p>
            )}
            {errors.originLastName && (
              <p className="error-msg">{`${errors.originLastName.message}`}</p>
            )}
          </div>
        </section>

        <section className="kana-name-section">
          <div className="kana-first-name-container">
            <label htmlFor="kanaFirstName">카나 (성)</label>
            <input
              className="first-name"
              type="text"
              {...register('kanaFirstName', {
                required: true,
                maxLength: {
                  value: 2,
                  message: '2자리 이하로 입력 해 주세요!',
                },

                pattern: {
                  value: /^[가-힣]+$/,
                  message: '잘못된 형식의 성 입니다!',
                },
              })}
            />
            {errors.kanaFirstName?.type === 'required' && (
              <p className="error-msg">{requireMsg.firstNameError}</p>
            )}
            {errors.kanaFirstName && (
              <p className="error-msg">{`${errors.kanaFirstName.message}`}</p>
            )}
          </div>

          <div className="kana-last-name-container">
            <label htmlFor="kanaLastName">카나 (이름)</label>
            <input
              className="last-name"
              type="text"
              {...register('kanaLastName', {
                required: true,
                maxLength: {
                  value: 2,
                  message: '2자리 이하로 입력 해 주세요!',
                },
                pattern: {
                  value: /^[가-힣]+$/,
                  message: '잘못된 형식의 이름 입니다!',
                },
              })}
            />
            {errors.kanaLastName?.type === 'required' && (
              <p className="error-msg">{requireMsg.lastNameError}</p>
            )}
            {errors.kanaLastName && <p className="error-msg">{`${errors.kanaLastName.message}`}</p>}
          </div>
        </section>

        {/* 배송지역을 입력받는 영역  */}
        <section className="delivery-info-section">
          <label htmlFor="">배송지</label>
          <div className="get-zip-code-container">
            <input
              type="text"
              className="get-zip-code-input"
              {...register('zipCodeNumber', {
                required: true,
                pattern: {
                  value: /^[0-9-]+$/,
                  message: '숫자를 입력 해 주세요!',
                },
                minLength: {
                  value: 7,
                  message: '최소 7자 이상을 입력 해 주세요!',
                },
              })}
              maxLength={8}
            />
            <button onClick={getAddress} className="get-zip-code-btn">
              우편번호 조회
            </button>
          </div>
          {errors.zipCodeNumber?.type === 'required' && (
            <p className="error-msg">{requireMsg.zipCodeNumberError}</p>
          )}
          {errors.zipCodeNumber && <p className="error-msg">{errors.zipCodeNumber.message}</p>}
          <input
            type="text"
            className="get-address-input"
            readOnly
            value={
              searchAddress?.length !== 0 && searchAddress !== null
                ? `${searchAddress[0]?.kana1} ${searchAddress[0]?.kana2} ${searchAddress[0]?.kana3}`
                : ''
            }
            {...register('mainAddress')}
          />

          <input
            type="text"
            placeholder="상세주소를 입력하세요"
            className="get-detail-address-input"
            {...register('detailAddress', {
              required: true,
            })}
          />
          {errors.detailAddress?.type === 'required' && (
            <p className="error-msg">{requireMsg.detailAddressError}</p>
          )}
        </section>

        {/* 사용자의 핸드폰 , 이메일, 요청사항을 입력받는 영역 */}
        <section className="orders-section">
          <div className="user-phone-number-container">
            <label htmlFor="userPhoneNumber">휴대폰 번호</label>
            <input
              className="user-phone-number-input"
              type="tel"
              {...register('userPhoneNumber', {
                required: true,
                pattern: {
                  value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                  message: '잘못된 형식의 번호를 입력했습니다!',
                },
                minLength: {
                  value: 11,
                  message: '11자리를 입력 해 주세요!',
                },
              })}
              maxLength={11}
            />
            {errors.userPhoneNumber?.type === 'required' && (
              <p className="error-msg">{requireMsg.phoneError}</p>
            )}
            {errors.userPhoneNumber && (
              <p className="error-msg">{`${errors.userPhoneNumber.message}`}</p>
            )}
          </div>

          <div className="user-email-container">
            <label htmlFor="userEmail">이메일 주소</label>

            <input
              className="user-email-input"
              type="email"
              {...register('userEmail', {
                required: true,
                pattern: {
                  value:
                    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                  message: '잘못된 형식의 이메일 입니다!',
                },
              })}
            />
            {errors.userEmail?.type === 'required' && (
              <p className="error-msg">{requireMsg.emailError}</p>
            )}
            {errors.userEmail && <p className="error-msg">{`${errors.userEmail.message}`}</p>}
          </div>

          <div className="delivery-message-container">
            <label htmlFor="deliveryMessage">배송시 요청사항</label>

            <input
              type="text"
              {...register('deliveryMessage')}
              className="delivery-message-input"
            />
          </div>
        </section>

        <div className="payment-btn">
          <PaymentBtn width="31.5rem" height="7.1rem" title="결재하기" />
        </div>
      </form>
    </S.PaymentFormContainer>
  );
};

export default PaymentForm;
