import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';
import { useTestSlice, useAppDispatch } from '../stores/hooks/index';
import { increase } from '../stores/reducers/testSlice';
const Home = () => {
  const { count } = useTestSlice();
  const dispatch = useAppDispatch();

  return (
    <StyledHome>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        +
      </button>
    </StyledHome>
  );
};

const StyledHome = styled.div``;

export default Home;
