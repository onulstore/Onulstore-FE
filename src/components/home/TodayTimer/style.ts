import styled from 'styled-components';

type StyleType = {
  fontSize?: number;
};
export const ShowCounter = styled.div<StyleType>`
  font-size: ${(props) => props.fontSize || 3.2}rem;
  font-weight: 700;
  font-family: 'Montserrat';
  color: #fff;
`;
