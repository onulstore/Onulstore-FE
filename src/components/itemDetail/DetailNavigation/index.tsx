import React, { Dispatch, SetStateAction } from 'react';
//STYLED
import * as S from './style';
//REACT-ROUNTER-DOM
import { NavLink } from 'react-router-dom';

//CONSTANTS
import { DetailNavigationData, IdetailNavigationData } from 'utils/constants';
import ScrollContainer from 'react-indiana-drag-scroll';

interface Props {
  setNestingPage: Dispatch<SetStateAction<string>>;
}

const DetailNavigation = ({ setNestingPage }: Props) => {
  return (
    <ScrollContainer>
      <S.DetailNavigationContainer>
        {DetailNavigationData.map((item: IdetailNavigationData) => {
          return (
            <li
              key={item.id}
              className="nav-item"
              onClick={() => {
                setNestingPage(item.title);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </S.DetailNavigationContainer>
    </ScrollContainer>
  );
};

export default DetailNavigation;
