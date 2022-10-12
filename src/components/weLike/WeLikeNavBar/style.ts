import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WeLikeNavBar = styled.nav`
  padding: 1.3rem 7.9rem;
  font-family: 'Montserrat';
  font-size: 1.6rem;
  color: ${({ theme }) => theme.palette.midGrey};
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightMidGrey};
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    width: 100%;
    display: flex;
    line-height: 150%;
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
