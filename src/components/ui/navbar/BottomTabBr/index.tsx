import { HamburgerMenuIcon, HomeIcon, MyPageIcon, RecentIcon, TodayIcon } from 'components/Icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu';
import * as S from './style';

function BottomTabBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <S.BottomTabBar>
        <S.BottomTabList>
          <li onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HamburgerMenuIcon color="#D86145" /> : <HamburgerMenuIcon />}
          </li>
          <li>
            <NavLink
              to="today"
              children={({ isActive }) =>
                isActive ? <TodayIcon color="#D86145" /> : <TodayIcon />
              }
            />
          </li>
          <li>
            <NavLink to="/">
              <S.HomeBtn>
                <HomeIcon />
              </S.HomeBtn>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="my-page"
              children={({ isActive }) =>
                isActive ? <MyPageIcon color="#D86145" /> : <MyPageIcon />
              }
            />
          </li>
          <li>
            <NavLink
              to="recent"
              children={({ isActive }) =>
                isActive ? <RecentIcon color="#D86145" /> : <RecentIcon />
              }
            />
          </li>
        </S.BottomTabList>
      </S.BottomTabBar>
    </>
  );
}

export default BottomTabBar;
