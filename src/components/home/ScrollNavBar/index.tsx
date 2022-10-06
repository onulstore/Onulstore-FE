import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { NavLink } from 'react-router-dom';
import * as S from './style';

const ScrollNavBar = () => {
  return (
    <ScrollContainer>
      <S.Navbar>
        <S.NavList>
          <S.Nav>
            <NavLink to="today">JUST FOR TODAY</NavLink>
          </S.Nav>
          <S.Nav>
            <NavLink to="we-like/magazine">WE LIKE</NavLink>
          </S.Nav>
          <S.Nav>
            <NavLink to="items">ITEMS</NavLink>
          </S.Nav>
        </S.NavList>
      </S.Navbar>
    </ScrollContainer>
  );
};

export default ScrollNavBar;
