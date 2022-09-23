import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './style'

export const BannerSwiper = () => {
  return (
    <S.BannerSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      loopedSlides= {2}
      navigation
      pagination={{
        type: "fraction",
      }}
      autoplay={{ delay: 2000 }}
    >
      <S.BannerSwiperSlide>Slide 1</S.BannerSwiperSlide>
      <S.BannerSwiperSlide>Slide 2</S.BannerSwiperSlide>
      <S.BannerSwiperSlide>Slide 3</S.BannerSwiperSlide>
      <S.BannerSwiperSlide>Slide 4</S.BannerSwiperSlide>
    </S.BannerSwiper>
  );
};