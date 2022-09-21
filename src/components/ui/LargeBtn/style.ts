import styled, {css} from "styled-components";

type styleType = {
  color?: string
  middleHeight?: boolean
  google?: boolean
}
export const LargeBtn = styled.button<styleType>`
  width: 31.1rem;
  height: 6rem;
  margin: 0.2rem;
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
  // 세로 길이 다른 버튼
  ${(props) => props.middleHeight && css`
    height: 5rem;
    `}

`
export const TextContainer = styled.div<styleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-size: 1.8rem;
  font-weight: 600;
  // 세로 길이 다른 버튼 폰트 조정
  ${(props) => ( props.middleHeight || props.google ) && css`
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 700;
    `}
  & svg {
    margin: 0 .8rem;
  }
`