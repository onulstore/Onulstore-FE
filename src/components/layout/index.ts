import styled from 'styled-components';

export const Layout = styled.div`
  width: 37.5rem;
  margin: auto;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    margin: auto;
    padding-bottom: 8.6rem;
  }
  @media (min-width: 1140px) {
    margin: auto;
    padding-bottom: 8.6rem;
  }
`;
