import styled from 'styled-components';

export const RecentSearch = styled.section`
  margin: 1.8rem 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.black};
  button {
    border: none;
    background-color: transparent;
  }
  .wrapper {
    width: 33.5rem;
    height: 4.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.whiteGrey};
    button {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.palette.darkGrey};
    }
  }
  h1 {
    font-weight: 600;
    font-size: 1.6rem;
  }
  ul {
    width: 33.5rem;
  }
  li {
    height: 3.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin-left: 1.4rem;
      cursor: pointer;
    }
    button {
      margin-right: 1rem;
    }
  }
  .empty {
    margin-top: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.palette.darkGrey};
  }
`;
