import styled from 'styled-components';
import { ShowProgressBarProps } from '../home';
import {
  HurryIcon,
  ReverseHurryIcon,
  ReverseWhiteHurryIcon,
  WhiteHurryIcon,
} from 'components/Icons';

export const BaseBar = styled.div.attrs((props: { baseColor: string }) => ({
  style: {
    backgroundColor: props.baseColor,
  },
}))<ShowProgressBarProps>`
  width: 100%;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.palette.midGrey};
`;
export const InnerBar = styled.div.attrs((props: { width: string; innerColor: string }) => ({
  style: {
    width: `${props.width}%`,
    backgroundColor: props.innerColor,
  },
}))<ShowProgressBarProps>`
  position: relative;
  width: 0%;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 2;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    box-sizing: border-box;
    background-color: #fff;
    border: 0.35rem solid ${(props) => props.innerColor || props.theme.palette.main};
    border-radius: 50%;
    margin-top: -0.4rem;
    right: 0;
  }
`;

export const Hurry = styled(HurryIcon)`
  position: absolute;
  right: -7.9rem;
  margin-top: 1rem;
  z-index: 2;
`;
export const ReverseHurry = styled(ReverseHurryIcon)`
  position: absolute;
  right: 1rem;
  margin-top: 1rem;
  z-index: 2;
`;
export const WhiteHurry = styled(WhiteHurryIcon)`
  position: absolute;
  top: -4.4rem;
  right: 1.7rem;
`;
export const ReverseWhiteHurry = styled(ReverseWhiteHurryIcon)`
  position: absolute;
  top: -4.4rem;
  left: 3.4rem;
`;
