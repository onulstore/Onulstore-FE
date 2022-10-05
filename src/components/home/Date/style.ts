import styled from 'styled-components';
import { ShowDateProps } from '../home';

export const ShowDate = styled.div<ShowDateProps>`
  font-size: ${(props) => props.fontSize || 1.5}rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-family: ${(props) => props.fontFamily || 'Montserrat'};
  color: ${(props) => props.color || props.theme.palette.black};
`;
