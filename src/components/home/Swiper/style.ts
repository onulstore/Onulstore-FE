import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BannerSwiper = styled(Swiper)`
  &.banner-swiper {
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
  }
  & .swiper-pagination-fraction {
    left: calc(50% - 3.75rem);
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
  &.banner {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: auto;
    }
  }
`;

export const JustForTodaySwiper = styled(Swiper)`
  &.today-swiper {
    width: 100%;
    padding-bottom: 6rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & .swiper-button-prev {
      left: 0.1rem;
    }
    & .swiper-button-next {
      right: 0.1rem;
    }
    & .swiper-button-next,
    .swiper-button-prev {
      top: 19.5rem;
    }
    & .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 3.2rem !important ;
      color: ${({ theme }) => theme.palette.black};
    }
  }
  & .swiper-pagination-bullets {
    bottom: 5.5rem;
    & .swiper-pagination-bullet {
      width: 3.2rem;
      height: 0.2rem;
      border-radius: 0;
      background-color: ${({ theme }) => theme.palette.black};
      &.swiper-pagination-bullet-active {
        height: 0.4rem;
      }
    }
  }
`;
export const JustForTodaySwiperSlide = styled(SwiperSlide)`
  &.today {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
    & img.item-img {
      width: 25.5rem;
      height: 25.5rem;
      margin: 6.1rem 4rem 3.2rem;
      border-radius: 50%;
      object-fit: cover;
    }
    & .item-info-box {
      width: 33.5rem;
      height: 10.2rem;
      margin-bottom: 4rem;
      background: #f7f7fa;
      border-radius: 0.8rem;
    }
    & .item-info {
      margin: 1.6rem 1.2rem;
      font-family: 'Montserrat';
      font-weight: 600;
      color: ${({ theme }) => theme.palette.darkGrey};
      h2 {
        font-size: 1.4rem;
        line-height: 130%;
      }
      h3 {
        font-size: 1.6rem;
        line-height: 130%;
        margin: 0.2rem 0;
      }
    }
    & .price-wrapper {
      display: flex;
      align-items: center;
    }
    & .price {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 150%;
      color: ${({ theme }) => theme.palette.black};
    }
    & .prediscount {
      margin: 0 0.8rem;
      font-weight: 400;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.palette.midGrey};
      text-align: center;
      text-decoration-line: line-through;
    }
    & .discount-wrapper {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.palette.main};
    }
    & .discount {
      font-size: 1.8rem;
    }
  }
`;
