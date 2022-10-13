import React, { useEffect, useState } from 'react';
import { useLocation, Outlet, useNavigate, useParams } from 'react-router-dom';
//STORE
import { headerBarHandler, priceFomater } from 'store/slices/itemSlice';
import { useAppDispatch, useItemSlice, useCartSlice } from 'store/hooks/index';
//COMPONENTS
import DetailNavigation from 'components/itemDetail/DetailNavigation/index';
//STYLED
import * as S from './style';
//DUMY
import { itemDumyImg } from 'assets/dumyImg';
//ICON
import { LargeLikeOffIcon, LargeLikeOnIcon } from 'components/Icons/index';
//UI
import PurchaseBtn from 'components/ui/CommonBlackBtn';
import WishListBtn from 'components/ui/WishListBtn';
import AddWishListModal from 'components/itemDetail/AddWishListModal';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
//API
import { getSingleItemList } from 'utils/Api/itemApi';
import { addCart } from 'utils/Api/cartApi';
//STORE
import { getDumyImageIndex } from 'store/slices/itemSlice';

const ItemDetail = () => {
  const [isAddWishListModal, setIsAddWishListModal] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const params: any = useParams();

  const dispatch = useAppDispatch();
  const { singleItemList, dumyImageIndex } = useItemSlice();
  const { userData } = useCartSlice();

  const addWishListModalHandler = () => {
    setIsAddWishListModal(!isAddWishListModal);
    // dispatch
  };

  const changeIconHandler = () => {
    setIsLike(!isLike);
  };

  useEffect(() => {
    dispatch(getSingleItemList(params.id));
    dispatch(headerBarHandler());

    return () => {
      dispatch(headerBarHandler());
    };
  }, []);

  useEffect(() => {
    dispatch(getDumyImageIndex(parseInt(params.id) - 48));
  }, []);

  return (
    <S.ItemDetailContainer>
      {isAddWishListModal && <AddWishListModal addWishListModalHandler={addWishListModalHandler} />}
      <img className="item-bg" src={itemDumyImg[dumyImageIndex]?.itemBg}></img>

      <section className="item-info">
        <div className="item-brand">
          <p className="brand-name">{singleItemList.brand?.brandName}</p>
          <span className="like-icon" onClick={changeIconHandler}>
            {isLike ? <LargeLikeOnIcon /> : <LargeLikeOffIcon />}
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

export default SetHeaderBar(ItemDetail);
