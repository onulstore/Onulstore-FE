import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WeLikeNavBar = styled.nav`
  margin: 1.3rem 7.9rem;
  font-family: 'Montserrat';
  font-size: 1.6rem;
  color: ${({ theme }) => theme.palette.midGrey};
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  li::after {
    content: '';
    width: 0.1rem;
    height: 0.9rem;
    margin: auto;
    display: block;
    background-color: ${({ theme }) => theme.palette.lightMidGrey};
  }
  li:last-child::after {
    display: none;
  }
`;

export const NavStyle = styled(NavLink)`
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.black};
  }
`;
