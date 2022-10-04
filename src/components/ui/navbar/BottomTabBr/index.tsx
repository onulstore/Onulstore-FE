import { HamburgerMenuIcon, HomeIcon, MyPageIcon, RecentIcon, TodayIcon } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import * as S from './style';

function BottomTabBar() {
  return (
    <S.BottomTabBar>
      <S.BottomTabList>
        <li>
          <HamburgerMenuIcon />
        </li>
        <li>
          <NavLink
            to="today"
            children={({ isActive }) => (isActive ? <TodayIcon color="#D86145" /> : <TodayIcon />)}
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
            to="mypage"
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
          <NavLink to="recent">{}</NavLink>
        </li>
      </S.BottomTabList>
    </S.BottomTabBar>
  );
}

export default BottomTabBar;
