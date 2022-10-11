import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './style';

export const OurPicksSwiper = (props: any) => {
  const { data } = props;
  return (
    <S.OurPicksSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ type: 'fraction' }}
    >
      {data[0].contents?.map((curation: any, index: number) => {
        const firstTitle = curation.title.split(' - ');
        return (
          <S.OurPicksSwiperSlide key={curation.id}>
            <div className="img-container">
              <img src={curation.curationImg} alt={curation.title} />
            </div>
            <S.TextBox>
              {index === 0 ? (
                <>
                  <h2 className="firstTitle">{firstTitle[0]}</h2>
                  <h3>{firstTitle[1]}</h3>
                </>
              ) : (
                <h2>{curation.title}</h2>
              )}
              <p>{curation.content}</p>
            </S.TextBox>
          </S.OurPicksSwiperSlide>
        );
      })}
    </S.OurPicksSwiper>
  );
};
