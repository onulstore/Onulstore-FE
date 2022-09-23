import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BannerSwiper = styled(Swiper)`
  width: 100%;
  height: 39.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #000;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover .swiper-button-next::after,
  &:hover .swiper-button-prev::after {
    opacity: 0.3;
  }
  & .swiper-pagination {
    left: calc(50vw - 3.75rem);
    bottom: 1.8rem;
    width: 7.5rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 1.4rem;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
    & span {
      // 숫자가 변할때마다 크기가 달라 움직여서 고정값을 줌
      width: 1.4rem;
    }
  }
`;
export const BannerSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #777;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    // 실제 배너 크기에 따라 object-fit 속성 값을 수정할 예정
    /* object-fit: contain; */
    object-fit: cover;
    margin: auto;
  }
`;
