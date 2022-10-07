import styled from 'styled-components';
import { ShowProgressBarProps } from '../home';
import { LeftHurryIcon, WhiteHurryIcon } from 'components/Icons';

export const BaseBar = styled.div<ShowProgressBarProps>`
  width: 100%;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.baseColor || props.theme.palette.midGrey};
`;
export const InnerBar = styled.div<ShowProgressBarProps>`
  position: relative;
  width: ${(props) => props.width || 0}%;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.innerColor || props.theme.palette.main};
  z-index: 5;
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
`;

export const LeftHurry = styled(LeftHurryIcon)`
  position: absolute;
  right: -7.9rem;
  margin-top: 1rem;
  z-index: 5;
`;
export const WhiteHurry = styled(WhiteHurryIcon)`
  position: absolute;
  top: -4.4rem;
  right: 1.7rem;
`;
