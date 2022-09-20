import styled, { css } from "styled-components";

type styleType = {
  line?: boolean
}
export const SmallBtn = styled.button<styleType>`
  width: 6.6rem;
  height: 1.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1.25rem;
  padding: 0.3rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background-color: #2F2F33;
  word-break: keep-all;
  vertical-align: middle;

  ${(props) => props.line && css`
    height: 1.37rem;
    padding: .5rem .8rem;
    border: .06rem solid #A9A9A9;
    `}
`