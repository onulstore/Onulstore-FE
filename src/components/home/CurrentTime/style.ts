import styled from 'styled-components';
import { FontStyleProps } from '../home';

export const ShowTime = styled.div<FontStyleProps>`
  font-size: ${(props) => props.fontSize || 1.5}rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-family: ${(props) => props.fontFamily || 'Pretendard'};
  color: ${(props) => props.color || props.theme.palette.black};
`;
