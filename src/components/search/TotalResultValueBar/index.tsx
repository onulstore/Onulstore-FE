import React, { useState } from 'react';
import * as S from './style';
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons';
import theme from 'style/theme';

const SelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const darkGrey = theme.palette.darkGrey;
  return (
    <S.SelectBox>
      <S.SelectContatiner onClick={() => setIsOpen(!isOpen)}>
        <span>{'최신순'}</span>
        {isOpen ? (
          <ArrowTopIcon width="0.7rem" height="0.4rem" color={darkGrey} />
        ) : (
          <ArrowBottomIcon width="0.7rem" height="0.4rem" color={darkGrey} />
        )}
      </S.SelectContatiner>
      {isOpen && (
        <S.SelectOptionList>
          <li>최신순</li>
          <li>판매순</li>
          <li>리뷰순</li>
          <li>인기순</li>
        </S.SelectOptionList>
      )}
    </S.SelectBox>
  );
};

function TotalResultValueBar({ data }: any) {
  return (
    <S.TotalResultValueBar>
      <div className="total-result-value">총 {data?.length}건의 아이템</div>
      <SelectBox />
    </S.TotalResultValueBar>
  );
}

export default TotalResultValueBar;
