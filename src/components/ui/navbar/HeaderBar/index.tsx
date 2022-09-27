import React from 'react';
import {
  ArrowLeftIcon,
  LogoIcon,
  SearchIcon,
  ShoppingBagIcon,
  CategoryArrowBottomIcon,
} from 'components/Icons';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { pageName } from 'utils/constants';
import { largeCategoryModalHandler } from 'store/slices/itemSlice';
import { useAppDispatch, useItemSlice } from 'store/hooks/index';

function HeaderBar() {
  const navigate = useNavigate();
  const pathname: any = useLocation().pathname;

  const dispatch = useAppDispatch();
  const { isDetailPage } = useItemSlice();

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
        {'/items' === pathname ? (
          !isDetailPage && (
            <S.HeaderCenter>
              <span
                className="Catagory"
                onClick={() => {
                  dispatch(largeCategoryModalHandler());
                }}
              >
                ITEMS
              </span>
              <CategoryArrowBottomIcon />
            </S.HeaderCenter>
          )
        ) : (
          <S.HeaderCenter>{pageName[pathname]}</S.HeaderCenter>
        )}
      </>
      <S.HeaderUl>
        <S.HeaderLi>
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
