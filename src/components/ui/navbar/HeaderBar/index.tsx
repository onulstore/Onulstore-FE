import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  LogoIcon,
  SearchIcon,
  ShoppingBagIcon,
  ArrowBottomIcon,
  ArrowTopIcon,
} from 'components/Icons';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { pageName } from 'utils/constants';
import { largeCategoryModalHandler, smallCategoryModalHandler } from 'store/slices/itemSlice';
import { useAppDispatch, useItemSlice } from 'store/hooks/index';

function HeaderBar() {
  const navigate = useNavigate();
  const pathname: string = useLocation().pathname;

  const dispatch = useAppDispatch();
  const { isDetailPage, isShowLargeCategoryModal, isShowSmallCategoryModal } = useItemSlice();

  return (
    <S.HeaderBar>
      <>
        {'/' === pathname ? (
          <S.HeaderLeft onClick={() => navigate('/')}>
            <LogoIcon />
          </S.HeaderLeft>
        ) : (
          <S.HeaderLeft onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
          </S.HeaderLeft>
        )}
        {'/items' === pathname || '/items/' === pathname ? (
          !isDetailPage && (
            <S.HeaderCenter>
              <span
                className="Catagory"
                onClick={() => {
                  if (isShowSmallCategoryModal) {
                    return dispatch(smallCategoryModalHandler());
                  }
                  dispatch(largeCategoryModalHandler());
                }}
              >
                ITEMS
              </span>
              {isShowLargeCategoryModal ? <ArrowTopIcon /> : <ArrowBottomIcon />}
            </S.HeaderCenter>
          )
        ) : (
          <S.HeaderCenter>{pageName[pathname]}</S.HeaderCenter>
        )}
      </>
      <S.HeaderUl>
        <S.HeaderLi onClick={() => navigate('/search')}>
          <SearchIcon />
        </S.HeaderLi>
        <S.HeaderLi onClick={() => navigate('/cart')}>
          <ShoppingBagIcon />
        </S.HeaderLi>
      </S.HeaderUl>
    </S.HeaderBar>
  );
}

export default HeaderBar;
