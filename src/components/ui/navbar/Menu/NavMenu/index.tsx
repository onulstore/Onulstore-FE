import { AngleTopIcon, AngleBottomIcon } from 'components/Icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuOpenProps } from '..';
import * as S from './style';

interface ToggleMenuProps {
  menuName: string;
  categories: string[];
}

// Items 카테고리 api 통신 가능시 데이터 가져올 예정
export const ToggleMenu = ({ menuName, categories }: ToggleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.NavMenuName
        className="toggle"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {menuName}
        {isOpen ? <AngleTopIcon /> : <AngleBottomIcon />}
      </S.NavMenuName>
      <S.ToggleMenuList className={isOpen ? 'open' : ''}>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </S.ToggleMenuList>
    </>
  );
};

export const NavMenu = ({ isOpen, setIsOpen }: MenuOpenProps) => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <S.MenuListTitle>
            <h2>ITEMS</h2>
          </S.MenuListTitle>
          <S.MenuList>
            <li>
              <ToggleMenu menuName="FASHION" categories={['ALL', 'BAG']} />
            </li>
            <li>
              <ToggleMenu menuName="LIVING" categories={['ALL', 'SPORTS', 'LIFESTYLE']} />
            </li>
            <li>
              <ToggleMenu menuName="BEAUTY" categories={['ALL', 'COSME']} />
            </li>
          </S.MenuList>
        </li>
        <li>
          <S.MenuListTitle>
            <h2>TODAY</h2>
          </S.MenuListTitle>
          <S.MenuList>
            <li
              onClick={() => {
                navigate('/just-today');
                setIsOpen(!isOpen);
              }}
            >
              <S.NavMenuName>JUST FOR TODAY</S.NavMenuName>
            </li>
            <li
              onClick={() => {
                navigate('/today-trend');
                setIsOpen(!isOpen);
              }}
            >
              <S.NavMenuName>TODAY’S TRENDS</S.NavMenuName>
            </li>
          </S.MenuList>
        </li>
        <li>
          <S.MenuListTitle>
            <h2>WE LIKE</h2>
          </S.MenuListTitle>
          <S.MenuList>
            <li
              onClick={() => {
                navigate('/magazine');
                setIsOpen(!isOpen);
              }}
            >
              <S.NavMenuName>MAGAZINE</S.NavMenuName>
            </li>
            <li
              onClick={() => {
                navigate('/our-picks');
                setIsOpen(!isOpen);
              }}
            >
              <S.NavMenuName>OUR PICKS</S.NavMenuName>
            </li>
          </S.MenuList>
        </li>
      </ul>
    </nav>
  );
};
