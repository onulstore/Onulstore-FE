import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import TodayTimerProgressBar from 'components/home/TodayTimerProgressBar';
import { SmallBtn } from 'components/ui/SmallBtn/style';
import { SmallReviewOnIcon } from 'components/Icons';
import theme from 'style/theme';
import CurrentTime from 'components/home/CurrentTime';
import { TodayDate } from 'components/home/Date';

function TodayItems({ data }: any) {
  const navigate = useNavigate();
  return (
    <S.TodayItems>
      <h1>
        <TodayDate fontWeight={500} fontSize={2.4} />
        <span>Special price</span>
      </h1>
      <ul>
        {data?.map((item: any) => (
          <li key={item.id}>
            <S.TodayItem>
              <div className="img-container">
                <img src={item.productImage[0].imageName} alt={item.productName} />
                <div className="progress-bar">
                  <TodayTimerProgressBar baseColor="transparent" />
                </div>
              </div>
              <S.TodayItemInfo>
                <div className="item-info">
                  <h2 className="brand-name">{item.brand}</h2>
                  <div className="star-ratings">
                    {item.rating}
                    <SmallReviewOnIcon color={theme.palette.midGrey} />
                    <SmallReviewOnIcon color={theme.palette.midGrey} />
                    <SmallReviewOnIcon color={theme.palette.midGrey} />
                    <SmallReviewOnIcon color={theme.palette.midGrey} />
                    <SmallReviewOnIcon color={theme.palette.midGrey} />
                  </div>
                </div>
                <h3 className="item-name">{item.productName}</h3>

                <div className="price-container">
                  <div className="discount-container">
                    <span className="prediscount">¥ {item.price.toLocaleString('jp-JP')}</span>
                    <div className="discount-wrapper">
                      <span className="discount">{item.discount}%</span>
                      <span className="price">
                        ¥ {(item.price * ((100 - item.discount) / 100)).toLocaleString('jp-JP')}
                      </span>
                    </div>
                  </div>
                  <SmallBtn
                    width={10.3}
                    height={3.2}
                    fontSize={1.6}
                    onClick={() => navigate(`/items/${item.id}`)}
                  >
                    구매하기
                  </SmallBtn>
                </div>
              </S.TodayItemInfo>
            </S.TodayItem>
          </li>
        ))}
      </ul>
    </S.TodayItems>
  );
}

export default TodayItems;
