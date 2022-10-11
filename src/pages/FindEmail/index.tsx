import React, { useState } from 'react';
import * as S from './style';
import LargeBtn from 'components/ui/LargeBtn';
import api from 'utils/Api';

function FindEmail() {
  const [phoneNum, setPhoneNum] = useState('');
  const findEmail = async (phoneNum: string) => {
    const res = await api({
      url: 'auth/find/email',
      method: 'POST',
      data: { phoneNum },
    });
    console.log(res);

    if (res.status === 200) {
      confirm('입력하신 번호로 가입된 이메일은' + res.data.email + '입니다 😎');
    } else {
      console.log(res.data.message);
      alert(res.data.message);
    }
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // console.log(value);
    setPhoneNum(value);
  };
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
