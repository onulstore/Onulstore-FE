import React from 'react';
import * as S from './style';
import { CategoryArrowRightIcon } from 'components/Icons';
//STORE
import { useItemSlice } from 'store/hooks/index';

const NowPositionBar = () => {
  const { nowPostionTitle } = useItemSlice();

  return (
    <S.NowPositionBarContainer>
      {nowPostionTitle?.length > 0 ? (
        <p>
          <span className="parent-path">{`${nowPostionTitle[0]}`}</span>
          <span className="arrow-right-icon">
            <CategoryArrowRightIcon />
          </span>
          <span className="child-path">{`${nowPostionTitle[1]}`}</span>
        </p>
      ) : (
        <p>
          <span className="parent-path">ITEMS</span>
          <span className="arrow-right-icon">{<CategoryArrowRightIcon />}</span>
          <span className="child-path">ALL</span>
        </p>
      )}
    </S.NowPositionBarContainer>
  );
};

export default NowPositionBar;
