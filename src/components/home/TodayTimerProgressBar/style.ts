import styled from 'styled-components';
import { ShowProgressBarProps } from '../home';

export const BaseBar = styled.div`
  width: 100%;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.palette.midGrey};
`;
export const InnerBar = styled.div<ShowProgressBarProps>`
  position: relative;
  width: ${(props) => props.width || 0}%;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.color || props.theme.palette.main};
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    box-sizing: border-box;
    background-color: #fff;
    border: 0.3rem solid ${(props) => props.color || props.theme.palette.main};
    border-radius: 50%;
    margin-top: -0.4rem;
    right: 0;
  }
  & svg {
    position: absolute;
    right: -7.9rem;
    margin-top: 1rem;
  }
`;
