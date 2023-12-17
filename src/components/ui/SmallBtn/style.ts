import styled, { css } from 'styled-components';

type styleType = {
  line?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
};
export const SmallBtn = styled.button<styleType>`
  width: ${({ width = 9.6 }) => width}rem;
  height: ${({ height = 2.8 }) => height}rem;
  margin: 0.2rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 2rem;
  color: #fff;
  outline: none;
  background-color: #2f2f33;
  word-break: keep-all;
  font-size: ${({ fontSize = 1.2 }) => fontSize}rem;
  // line 들어간 버튼
  ${(props) =>
    props.line &&
    css`
      border: 0.1rem solid #a9a9a9;
    `}
`;
