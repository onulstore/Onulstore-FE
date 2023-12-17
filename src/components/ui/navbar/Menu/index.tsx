import React from 'react';
import * as S from './style';
import UserInfoIconNavBar from './UserInfoIconNavBar';
import UserNameContainer from './UserNameContainer';
import { NavMenu } from './NavMenu';

export interface MenuOpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isOpen, setIsOpen }: MenuOpenProps) {
  return (
    <S.Menu isOpen={isOpen}>
      <UserNameContainer isOpen={isOpen} setIsOpen={setIsOpen} />
      <UserInfoIconNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </S.Menu>
  );
}

export default Menu;
