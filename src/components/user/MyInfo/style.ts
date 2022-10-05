import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.black};
  height: 21.7rem;
  padding: 2rem;
`;

export const Hr = styled.hr`
  height: 1px;
  opacity: 0.08;
  border: 0;
  background-color: ${({ theme }) => theme.palette.whiteGrey};
`;
