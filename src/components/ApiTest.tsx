import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getUser, postUser } from '../stores/api/index';
import { useAppDispatch, useTestSlice } from '../stores/hooks/index';

const ApiTest = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const { isLoading, testList } = useTestSlice();

  const getNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const getPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (name.trim().length < 2) {
      alert('2글자 이상입력 해 주세요!');
      return;
    }
    if (password.trim().length < 8) {
      alert('비밀번호는 8자 이상을 입력 해 주세요!');
      return;
    }
    e.preventDefault();
    dispatch(
      postUser({
        id: nanoid(),
        name,
        password,
      }),
    );
    setName('');
    setPassword('');
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <StyledApiTest>
      {/* POST */}
      <form onSubmit={submitHandler}>
        <label>
          <input type="text" value={name} onChange={getNameHandler} />
        </label>
        <label>
          <input type="text" value={password} onChange={getPasswordHandler} />
        </label>
        <button>제출</button>
      </form>

      {isLoading === 'reject' && <p>api 요청실패!</p>}
    </StyledApiTest>
  );
};

const StyledApiTest = styled.div``;

export default ApiTest;
