import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './style';

interface bannerData {
  id: string;
  path: string;
  url: string;
  name: string;
}
interface bannerDataProps {
  data: bannerData[];
}

export const BannerSwiper = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <S.BannerSwiper
      className="banner-swiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      loopedSlides={2}
      navigation
      pagination={{ type: 'fraction' }}
      autoplay={{ delay: 2000 }}
    >
      {data?.map((bannerData: any) => (
        <S.BannerSwiperSlide
          className="banner"
          key={bannerData.id}
          onClick={() => navigate(bannerData.path)}
        >
          <img src={bannerData.url} alt={bannerData.name} />
        </S.BannerSwiperSlide>
      ))}
    </S.BannerSwiper>
  );
};

interface itemData {
  id: string;
  brand: string;
  productName: string;
  price: number;
  productImage: { imageName: string }[];
  discount?: number; // 데이터 확인 필요
}
interface itemDataProps {
  data: itemData[];
}
export const JustForTodaySwiper = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <S.JustForTodaySwiper
      className="today-swiper"
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {data?.map((itemData: any, index: number) => (
        <S.JustForTodaySwiperSlide
          className="today"
          key={itemData.id}
          onClick={() => navigate(`/items/${itemData.id}`)}
        >
          <img
            className="item-img"
            src={itemData.productImage[0].imageName}
            alt={itemData.productName}
          />
          <div className="item-info-box">
            <div className="item-info">
              <h2>[{itemData.brand}]</h2>
              <h3>{itemData.productName}</h3>
              <div className="price-wrapper">
                {itemData.discount ? (
                  <>
                    <span className="price">
                      ¥{' '}
                      {(itemData.price * ((100 - itemData.discount) / 100)).toLocaleString('jp-JP')}
                    </span>
                    <span className="prediscount">¥ {itemData.price.toLocaleString('jp-JP')}</span>
                    <div className="discount-wrapper">
                      <span className="discount">{itemData.discount}</span>
                      <span>%</span>
                    </div>
                  </>
                ) : (
                  <span className="price">¥ {itemData.price.toLocaleString('jp-JP')}</span>
                )}
              </div>
            </div>
          </div>
        </S.JustForTodaySwiperSlide>
      ))}
    </S.JustForTodaySwiper>
  );
};
