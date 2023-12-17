import React from 'react';
import * as S from './style';
type ButtonType = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  line?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
};

function SmallBtn(props: ButtonType) {
  return (
    <>
      <S.SmallBtn {...props}>{props.children}</S.SmallBtn>
    </>
  );
}

export default SmallBtn;
