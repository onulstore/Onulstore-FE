import styled from 'styled-components';

export const HeaderBar = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  form {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }
  button {
    position: absolute;
    right: 3.5rem;
    border: none;
    background-color: transparent;
  }
`;

export const HeaderLeft = styled.div`
  height: 2.35rem;
  & svg {
    cursor: pointer;
    margin-left: 2rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 3.4rem;
  padding-left: 2rem;
  margin: 1.3rem 2.1rem 1.3rem 1.9rem;
  box-sizing: border-box;
  font-size: 1.4rem;
  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.palette.whiteGrey};
  outline: none;
`;
