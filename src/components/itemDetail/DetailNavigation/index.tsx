import React from 'react';
//STYLED
import * as S from './style';
//REACT-ROUNTER-DOM
import { NavLink } from 'react-router-dom';
//CONSTANTS
import { DetailNavigationData, IdetailNavigationData } from 'utils/constants';
import ScrollContainer from 'react-indiana-drag-scroll';
const DetailNavigation = () => {
  return (
    <ScrollContainer>
      <S.DetailNavigationContainer>
        {DetailNavigationData.map((item: IdetailNavigationData) => {
          return (
            <li key={item.id}>
              <NavLink to={`${item.path}`} className="nav-item">
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </S.DetailNavigationContainer>
    </ScrollContainer>
  );
};

export default DetailNavigation;
