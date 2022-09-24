import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './style';

interface bannerData {
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
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      loopedSlides={2}
      navigation
      pagination={{ type: 'fraction' }}
      autoplay={{ delay: 2000 }}
    >
      {data?.map((bannerData, index) => (
        <S.BannerSwiperSlide key={index} onClick={() => navigate(bannerData.path)}>
          <img src={bannerData.url} alt={bannerData.name} />
        </S.BannerSwiperSlide>
      ))}
    </S.BannerSwiper>
  );
};
