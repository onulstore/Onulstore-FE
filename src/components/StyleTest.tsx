import React, { useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';

const StyleTest = () => {
  const [test, setTest] = useState(true);
  return (
    <StyledTest test={test}>
      <p className="text">this is test component</p>
      <p className="text2">this is styled component props test</p>
    </StyledTest>
  );
};

const StyledTest = styled.div`
  .text {
    color: ${({ theme }): string => {
      return theme.palette.blackColor;
    }};
  }
  .text2 {
    color: ${({ test, theme }: { test: boolean; theme: DefaultTheme }): string => {
      return test ? theme.palette.blackColor : theme.palette.whiteColor;
    }};
  }
`;

export default StyleTest;
