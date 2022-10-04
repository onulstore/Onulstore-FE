import styled from 'styled-components';

export const BottomTabBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8.1rem;
  background: #fff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.06);
`;
export const BottomTabList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0.4rem 1.75rem 2rem;
  & li {
    cursor: pointer;
  }
`;
export const HomeBtn = styled.button`
  position: relative;
  bottom: 0.9rem;
  width: 6rem;
  height: 6rem;
  border: none;
  border-radius: 50%;
  background: linear-gradient(134.43deg, #d86145 8.74%, #f88367 92.08%);
  box-shadow: 0px 4px 4px rgba(216, 97, 69, 0.2);
`;
