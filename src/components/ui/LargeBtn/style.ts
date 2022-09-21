import styled, {css} from "styled-components";

type styleType = {
  color?: string
  middleHeight?: boolean
  google?: boolean
}
export const LargeBtn = styled.button<styleType>`
  width: 31.1rem;
  height: 6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.color === '#F5F5F5' ? '#505050' : '#fff'};
  outline: none;
  padding: 1.7rem 1.2rem;
  background: ${(props) => props.color || '#2F2F33'};
  line-height: 150%;

  ${(props) => props.middleHeight && css`
    height: 5rem;
    `}

`
export const TextContainer = styled.div<styleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'MontserratSemiBold';
  font-size: 1.8rem;
  ${(props) => ( props.middleHeight || props.google ) && css`
    font-family: 'PretendardBold';
    font-size: 1.5rem;
    `}
  & img {
    margin: 0 .8rem;
  }
`