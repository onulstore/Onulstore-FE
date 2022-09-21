import styled, { css } from "styled-components";

type styleType = {
  line?: boolean
}
export const SmallBtn = styled.button<styleType>`
  width: 9.6rem;
  height: 2.8rem;
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
  background-color: #2F2F33;
  word-break: keep-all;
  font-size: 1.2rem;
  // line 들어간 버튼
  ${(props) => props.line && css`
    height: 2.2rem;
    border: .1rem solid #A9A9A9;
    `}
`