import React from 'react';
//STYLED
import * as S from './style';
//STORE
import { smallCategoryModalHandler, largeCategoryModalHandler } from 'store/slices/itemSlice';
import { useAppDispatch } from 'store/hooks/index';
//REACT-ROUTER
import { useNavigate, useLocation } from 'react-router-dom';
const LargeCategoryModal = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.LargeCategoryModalContainer>
      <div className="content">
        <p>TODAY</p>
        <p>WE LIKE</p>
        <p>PROMOTIONS</p>
        <p
          onClick={() => {
            dispatch(largeCategoryModalHandler());
            dispatch(smallCategoryModalHandler());
            if (pathname !== '/items') {
              navigate('/items');
            }
          }}
        >
          ITEMS
        </p>
      </div>
    </S.LargeCategoryModalContainer>
  );
};

export default LargeCategoryModal;
