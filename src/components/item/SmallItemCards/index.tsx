import React from 'react';
import * as S from './style';
import { SmallLikeIcon, SmallReviewOnIcon } from 'components/Icons';
import theme from 'style/theme';
import { useNavigate } from 'react-router-dom';

export const ReviewItemCard = ({ data }: any) => {
  return (
    <S.SmallItemCard>
      <img src={data.productImage[0].imageName} alt={data.productName} />
      <S.ItemInfo>
        <h2 className="brand-name">{data.brand.brandName}</h2>
        <h3 className="item-name">{data.productName}</h3>
      </S.ItemInfo>
    </S.SmallItemCard>
  );
};

export const OurPicksItemCard = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <S.SmallItemCard className="pointer" onClick={() => navigate(`items/${data.id}`)}>
      <img src={data.productImage[0].imageName} alt={data.productName} />
      <S.ItemInfo>
        <div className="brand-name">{data.brand.brandName}</div>
        <div className="item-name">{data.productName}</div>
        <div className="our-picks-wrapper">
          <S.PriceWrapper>
            <span className="discount">{100 - (data.price / data.originalPrice) * 100}%</span>
            <span className="price">¥ {data.price.toLocaleString('jp-JP')}</span>
          </S.PriceWrapper>
          <S.WishLikeContainer>
            <span className="small-review-icon">
              <SmallReviewOnIcon color={theme.palette.midGrey} /> 4.5
              {/* {data.starCount} 데이터 확인 필요*/}
            </span>
            <span>
              <SmallLikeIcon color={theme.palette.midGrey} /> {data.wishListCount}
            </span>
          </S.WishLikeContainer>
        </div>
      </S.ItemInfo>
    </S.SmallItemCard>
  );
};

export const OrderItemCard = ({ data }: any) => {
  return (
    <S.SmallItemCard>
      <img src={data.productImage[0].imageName} alt={data.productName} />
      <S.ItemInfo>
        <div className="brand-name">{data.brand.brandName}</div>
        <div className="item-name">{data.productName}</div>
        <div className="our-picks-wrapper">
          <S.PriceWrapper>
            <span className="discount">{100 - (data.price / data.originalPrice) * 100}%</span>
            <span className="price">¥ {data.price.toLocaleString('jp-JP')}</span>
          </S.PriceWrapper>
          <div className="item-count">수량: 1개</div>
        </div>
      </S.ItemInfo>
    </S.SmallItemCard>
  );
};

export const CartItemCard = ({ data }: any) => {
  return (
    <S.SmallItemCard>
      <img src={data.productImage[0].imageName} alt={data.productName} />
      <S.ItemInfo>
        <div className="item-name">{data.productName}</div>
        <br />
        <div className="our-picks-wrapper">
          <S.PriceWrapper>
            <span className="discount">{100 - (data.price / data.originalPrice) * 100}%</span>
            <span className="price">¥ {data.price.toLocaleString('jp-JP')}</span>
          </S.PriceWrapper>
          <div className="item-count">수량: 1개</div>
        </div>
      </S.ItemInfo>
    </S.SmallItemCard>
  );
};
