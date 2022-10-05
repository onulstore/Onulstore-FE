import styled from 'styled-components';

export const MenuListTitle = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.palette.black};
  & h2 {
    margin: 1rem 2.5rem;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const MenuList = styled.ul`
  margin: 1.1rem 1.9rem 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const NavMenuName = styled.h3`
  height: 2.8rem;
  margin: 0.5rem 1.9rem;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.palette.midGrey};
  cursor: pointer;
  &.toggle {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.palette.whiteGrey};
  }
`;

export const ToggleMenuList = styled.ul`
  margin: 0.5rem 1.9rem;
  display: flex;
  flex-direction: column;
  transform: translateY(-10%);
  transition: 0.3s;
  & li {
    height: 3rem;
    margin: 0.3rem 1rem;
    display: flex;
    align-items: center;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.6rem;
    color: ${(props) => props.theme.palette.darkGrey};
    display: none;
  }
  &.open {
    transform: translateY(0);
    & li {
      display: block;
    }
  }
  &.open li:hover {
    color: ${(props) => props.theme.palette.main};
    text-decoration: underline;
    cursor: pointer;
  }
`;
