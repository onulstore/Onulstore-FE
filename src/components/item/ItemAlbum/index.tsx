import React, { useState } from 'react';
//REACT-ROUTER
import { useNavigate } from 'react-router-dom';
//STORE
import { priceFomater } from 'store/slices/itemSlice';
import { IallItemList } from 'store/slices/itemSlice';
//STYLED
import * as S from './style';
//ICON
import {
  SmallLikeIcon,
  SmallReviewOnIcon,
  LargeLikeOffIcon,
  LargeLikeOnIcon,
} from 'components/Icons';
//DUMY BG

import { itemDumyImg } from 'assets/dumyImg';
interface Props {
  item: IallItemList;
  index: number;
  ranking?: boolean;
}

const ItemAlbum = ({ item, index, ranking }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();

  const isLikeHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };

  const moveDetailPage = () => {
    navigate(`/items/${item.id}`, { state: item });
  };
  return (
    <S.ItemAlbumContainer onClick={moveDetailPage}>
      <section className="item-bg">
        {ranking && <div className="rank-box">{index + 1}</div>}
        <span className="item-icon" onClick={isLikeHandler}>
          {isLike ? <LargeLikeOnIcon /> : <LargeLikeOffIcon />}
        </span>
        <img src={itemDumyImg[index]?.itemBg} className="item-bg" />
      </section>

      <section className="item-info">
        <div className="item-title-container">
          <p className="item-title">{item.brand?.brandName} </p>
          <p className="item-status">{item.productStatus}</p>
        </div>

        <p className="item-description">{item.productName}</p>
        <p className="item-price">
          <span className="discount-purcent">40%</span> ¥{priceFomater('ja-JP', item.price)}
        </p>
        <div className="review-and-like">
          <span className="small-review-icon">
            <SmallReviewOnIcon /> 4.0
          </span>
          <span>
            <SmallLikeIcon /> 20
          </span>
        </div>
      </section>
    </S.ItemAlbumContainer>
  );
};

export default ItemAlbum;
