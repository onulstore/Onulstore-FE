import styled from 'styled-components';

export const NavIconWrapper = styled.ul`
  margin: 0 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & li {
    width: 100%;
    display: flex;
    align-items: center;
  }
  & li::after {
    content: '';
    width: 2px;
    height: 1.6rem;
    background-color: #d9d9d9;
  }
  & li:last-child::after {
    display: none;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  cursor: pointer;
  & span {
    margin-top: 0.7rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    word-break: keep-all;
  }
`;
