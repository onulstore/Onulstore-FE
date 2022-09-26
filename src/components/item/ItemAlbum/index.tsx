import React, { useState } from 'react';
import { AllItemList } from 'store/slices/itemSlice';
import { useNavigate } from 'react-router-dom';
//STYLE
import * as S from './style';
//ICON
import {
  SmallLikeIcon,
  SmallReviewOnIcon,
  LargeLikeOffIcon,
  LargeLikeOnIcon,
} from 'components/Icons';
//DUMY BG
import dumyBg from 'assets/dumyBg.png';

interface Props {
  item: AllItemList;
}

const ItemAlbum = ({ item }: Props) => {
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
        <div className="rank-box">1</div>
        <span className="item-icon" onClick={isLikeHandler}>
          {isLike ? <LargeLikeOnIcon /> : <LargeLikeOffIcon />}
        </span>
        <img src={dumyBg} className="item-bg" />
      </section>

      <section className="item-info">
        <div className="item-title-container">
          <p className="item-title">Around ann{/* {item.productName} */}</p>
          <p className="item-sort">신상품</p>
        </div>

        <p className="item-description">Tweedy hobo bag ivory_Brown{/* {item.content} */}</p>
        <p className="item-price">
          <span className="discount-purcent">40%</span> ¥3,800{/* {item.price} */}
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

export default React.memo(ItemAlbum);
