import React, { useEffect, useState } from 'react';
import { useLocation, Outlet, useNavigate, useParams } from 'react-router-dom';
import { headerBarHandler } from 'store/slices/itemSlice';
import { useAppDispatch, useItemSlice } from 'store/hooks/index';
import { priceFomater } from 'store/slices/itemSlice';
//COMPONENTS
import DetailNavigation from 'components/itemDetail/DetailNavigation/index';
//STYLED
import * as S from './style';
//DUMY
import dumyBg from 'assets/dumyBg.png';
//ICON
import { LargeLikeOffIcon, LargeLikeOnIcon } from 'components/Icons/index';
//UI
import PurchaseBtn from 'components/ui/CommonBlackBtn';
import WishListBtn from 'components/ui/WishListBtn';
import AddWishListModal from 'components/itemDetail/AddWishListModal';
//API
import { getSingleItemList } from 'utils/Api/itemApi';
const ItemDetail = () => {
  const [isAddWishListModal, setIsAddWishListModal] = useState(false);

  const params = useParams();

  const dispatch = useAppDispatch();
  const { singleItemList } = useItemSlice();

  const addWishListModalHandler = () => {
    setIsAddWishListModal(!isAddWishListModal);
  };

  useEffect(() => {
    dispatch(getSingleItemList(params.id));
    dispatch(headerBarHandler());

    return () => {
      dispatch(headerBarHandler());
    };
  }, []);

  return (
    <S.ItemDetailContainer>
      {isAddWishListModal && <AddWishListModal addWishListModalHandler={addWishListModalHandler} />}
      <img className="item-bg" src={dumyBg}></img>

      <section className="item-info">
        <div className="item-brand">
          <p className="brand-name">{singleItemList.brand?.brandName}</p>
          <span className="like-icon">
            <LargeLikeOffIcon />
          </span>
        </div>

        <p className="item-title">{singleItemList?.productName}</p>

        <div className="item-price">
          <p className="original-price">¥ 4,800</p>
          <div className="discount">
            <p className="discount-price">
              <span className="discount-percent">40%</span>¥
              {priceFomater('ja-JP', singleItemList?.price)}
            </p>
          </div>
        </div>
      </section>
      <DetailNavigation />
      <Outlet />
      <section className="actions">
        <div onClick={addWishListModalHandler}>
          <WishListBtn />
        </div>
        <div>
          <PurchaseBtn width="28.7rem" height="7.1rem" title="구매하기" />
        </div>
      </section>
    </S.ItemDetailContainer>
  );
};

export default ItemDetail;
