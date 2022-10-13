import styled from 'styled-components';

export const Magazine = styled.div<{ home?: boolean }>`
  margin-bottom: ${({ home }) => (home ? '' : '4.5rem')};
  .img-container {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CurationTextBox = styled.div`
  position: relative;
  bottom: 2.1em;
  margin-left: 2rem;
  color: ${({ theme }) => theme.palette.black};
  h2 {
    width: 100%;
    display: flex;
    &::after {
      content: '';
      position: relative;
      top: 6rem;
      width: auto;
      height: 0.2rem;
      display: block;
      flex-grow: 1;
      background-color: ${({ theme }) => theme.palette.black};
    }
  }
  span {
    width: 21rem;
    height: 7.6rem;
    margin-right: 1.4rem;
    display: block;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 3.8rem;
    word-break: keep-all;
  }
  p {
    margin: 1.4rem 2rem 1.8rem 0;
    font-family: 'Montserrat';
    font-size: 1.4rem;
    line-height: 1.7rem;
    word-break: keep-all;
  }
`;
export const CurationItemBox = styled.div<{ home?: boolean }>`
  width: 100%;
  padding: ${({ home }) => (home ? '' : '0 2rem')};
  display: flex;
  justify-content: ${({ home }) => (home ? 'space-between' : 'space-evenly')};
`;
