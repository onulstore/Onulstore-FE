import React, { useEffect, useState } from 'react';
import * as S from './style';
import { AllItemList } from 'store/slices/itemSlice';

import {
  SmallLikeIcon,
  SmallReviewOnIcon,
  LargeLikeOffIcon,
  LargeLikeOnIcon,
} from 'components/Icons';

import dumyBg from 'assets/react.svg';
interface Props {
  item: AllItemList;
}

const index = ({ item }: Props) => {
  const [isLike, setIsLike] = useState(false);

  const isLikeHandler: React.MouseEventHandler<HTMLParagraphElement> = () => {
    setIsLike(!isLike);
  };

  return (
    <S.ItemAlbumContainer>
      <section className="item-bg">
        <div className="rank-box">1</div>
        <span className="item-icon" onClick={isLikeHandler}>
          {isLike ? <LargeLikeOnIcon /> : <LargeLikeOffIcon />}
        </span>
        <img src={dumyBg} className="item-bg" />
      </section>

      <section className="item-info">
        <div className="item-title-container">
          <p className="item-title">{item.productName}</p>
          <p className="item-sort">신상품</p>
        </div>
        <p className="item-description">{item.content}</p>
        <p className="item-price">
          <span className="discount-purcent">40%</span> ¥{item.price}
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

export default React.memo(index);
