import React, { useState } from 'react';
import * as S from './style';
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons';
import theme from 'style/theme';
import { useDispatch } from 'react-redux';
import {
  sortNew,
  sortPurchaseCount,
  sortRating,
  sortWishListCount,
} from 'store/slices/searchSlice';

const SelectBox = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('최신순');
  const darkGrey = theme.palette.darkGrey;
  return (
    <S.SelectBox>
      <S.SelectContatiner onClick={() => setIsOpen(!isOpen)}>
        <span>{sortOption}</span>
        {isOpen ? (
          <ArrowTopIcon width="0.8rem" height="0.4rem" color={darkGrey} />
        ) : (
          <ArrowBottomIcon width="0.8rem" height="0.4rem" color={darkGrey} />
        )}
      </S.SelectContatiner>
      {isOpen && (
        <S.SelectOptionList>
          <li
            onClick={() => {
              setSortOption('최신순');
              dispatch(sortNew());
            }}
          >
            최신순
          </li>
          <li
            onClick={() => {
              setSortOption('판매순');
              dispatch(sortPurchaseCount());
            }}
          >
            판매순
          </li>
          <li
            onClick={() => {
              setSortOption('리뷰순');
              dispatch(sortRating());
            }}
          >
            리뷰순
          </li>
          <li
            onClick={() => {
              setSortOption('인기순');
              dispatch(sortWishListCount());
            }}
          >
            인기순
          </li>
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
