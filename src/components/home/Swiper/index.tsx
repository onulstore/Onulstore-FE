import React, { useState } from 'react';
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

export const BannerSwiper = (props: bannerDataProps) => {
  const navigate = useNavigate();
  const { data } = props;
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
      {data?.map((bannerData) => (
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

export const NavbarSwiper = () => {
  const navigate = useNavigate();

  return (
    <S.NavbarSwiper
      className="menu-swiper"
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={'auto'}
    >
      {/* navigate 경로는 임시로 넣었습니다. */}
      <S.NavbarSwiperSlide className="menu" onClick={() => navigate('/today')}>
        JUST FOR TODAY
      </S.NavbarSwiperSlide>
      <S.NavbarSwiperSlide className="menu" onClick={() => navigate('/welike')}>
        WE LIKE
      </S.NavbarSwiperSlide>
      <S.NavbarSwiperSlide className="menu" onClick={() => navigate('/promotion')}>
        PROMOTION
      </S.NavbarSwiperSlide>
      <S.NavbarSwiperSlide className="menu" onClick={() => navigate('/item')}>
        ITEM
      </S.NavbarSwiperSlide>
    </S.NavbarSwiper>
  );
};
