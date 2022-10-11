import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const OurPicksSwiper = styled(Swiper)`
  border-radius: 0.8rem;
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: ${({ theme }) => theme.palette.black};
    opacity: 0;
    transition: 0.3s;
  }
  :hover .swiper-button-next::after,
  :hover .swiper-button-prev::after {
    opacity: 0.7;
  }
  .swiper-pagination-fraction {
    left: calc(50% - 3.75rem);
    bottom: 26rem;
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
export const OurPicksSwiperSlide = styled(SwiperSlide)`
  height: 58.2rem;
  background: #fff;
  border: 0.1rem solid #e6e6e6;
  border-radius: 0.8rem;
  .img-container {
    width: 100%;
    height: 33.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: auto;
    }
  }
  h2 {
    margin: 3.2rem 0 1.3rem;
    font-family: 'Pretendard';
    font-weight: 800;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.black};
    &.firstTitle {
      font-size: 1.6rem;
    }
  }
  h3 {
    margin-bottom: 1.8rem;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.9rem;
  }
  p {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;
    word-break: keep-all;
  }
`;
export const TextBox = styled.div`
  margin: 0 2.8rem;
  color: ${({ theme }) => theme.palette.black};
`;
