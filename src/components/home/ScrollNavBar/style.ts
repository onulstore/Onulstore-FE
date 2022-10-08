import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 3.9rem;
  margin: 2.6rem 0;
  display: flex;
  justify-content: center;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  &:hover li {
    font-weight: 400;
    color: #c3c3c6;
  }
  & li:hover {
    font-weight: 700;
    color: #111;
  }
`;

export const Nav = styled.li`
  width: auto;
  padding-right: 2.5rem;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.8rem;
  color: #111;
  cursor: pointer;
  transition: 0.1s;
  &:last-child {
    padding-right: 0;
  }
  &:hover::after {
    content: '';
    display: block;
    width: auto;
    height: 0.4rem;
    margin-top: 1.2rem;
    background-color: #111;
  }
`;
