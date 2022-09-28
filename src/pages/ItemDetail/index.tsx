import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { headerBarHandler } from 'store/slices/itemSlice';
import { useAppDispatch, useItemSlice } from 'store/hooks/index';
//COMPONENTS
import DetailNavigation from 'components/itemDetail/DetailNavigation/index';
//STYLED
import * as S from './style';
//DUMY
import dumyBg from 'assets/dumyBg.png';
//ICON
import { LargeLikeOffIcon, LargeLikeOnIcon } from 'components/Icons/index';
//UI
import PurchaseBtn from 'components/ui/PurchaseBtn';
import WishListBtn from 'components/ui/WishListBtn';
const ItemDetail = () => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(headerBarHandler());

    return () => {
      dispatch(headerBarHandler());
    };
  }, []);

  return (
    <S.ItemDetailContainer>
      <img className="item-bg" src={dumyBg}></img>

      <section className="item-info">
        <div className="item-brand">
          <p className="brand-name">Around ann</p>
          <span className="like-icon">
            <LargeLikeOffIcon />
          </span>
        </div>

        <p className="item-title">String bag_ light grey</p>

        <div className="item-price">
          <p className="original-price">¥ 4,800</p>
          <div className="discount">
            <p className="discount-price">
              <span className="discount-percent">40%</span>¥ 3,800
            </p>
          </div>
        </div>
      </section>
      <DetailNavigation />
      <Outlet />
      <section className="actions">
        <WishListBtn />
        <PurchaseBtn />
      </section>
    </S.ItemDetailContainer>
  );
};

export default ItemDetail;
