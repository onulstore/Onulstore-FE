import styled, { css } from "styled-components";

type styleType = {
  line?: boolean
}
export const SmallBtn = styled.button<styleType>`
  width: 9.6rem;
  height: 2.8rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 2rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background-color: #2F2F33;
  word-break: keep-all;
  font-family: 'PretendardRegular';
  font-size: 1.2rem;
  font-weight: 600;

  ${(props) => props.line && css`
    height: 2.2rem;
    border: .1rem solid #A9A9A9;
    `}
`