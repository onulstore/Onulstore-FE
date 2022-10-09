import React, { useState } from 'react';
import * as S from './style';
import LargeBtn from 'components/ui/LargeBtn';
import api from 'utils/Api';

function FindEmail() {
  return (
    <S.Container>
      <div className="text">
        <p className="title">휴대폰 본인인증으로 찾기</p>
        <p className="description">하이픈이 없는 숫자로만 입력해주세요.</p>
      </div>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          placeholder="휴대폰 번호 입력"
          onChange={onChangeHandler}
        />

        <LargeBtn onClick={() => findEmail(phoneNum)}>인증하기</LargeBtn>
      </div>
    </S.Container>
  );
}

export default FindEmail;
