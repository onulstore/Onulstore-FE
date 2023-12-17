import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.black};
  height: 18.6rem;
  padding: 3.7rem 2rem;

  hr {
    height: 1px;
    opacity: 0.08;
    border: 0;
    background-color: ${({ theme }) => theme.palette.whiteGrey};
  }
`;
