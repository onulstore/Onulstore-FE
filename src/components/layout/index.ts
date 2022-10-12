import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
  width: 37.5rem;
  height: 87.5rem;
  position: relative;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1140px) {
    margin: auto;
  }
`;
