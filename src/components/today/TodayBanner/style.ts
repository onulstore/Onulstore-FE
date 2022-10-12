import styled from 'styled-components';

export const TodayBanner = styled.div`
  position: relative;
  width: 37.5rem;
  height: 33.5rem;
  background: linear-gradient(180deg, #ffffff 0%, #dfe0e2 100%);
  .img-container {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .time-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    p {
      width: 23.7rem;
      margin-top: 3rem;
      text-align: center;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 150%;
      color: #fff;
      opacity: 0.7;
      word-break: keep-all;
    }
  }
  .time {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 5rem;
      color: transparent;
      -webkit-text-stroke-width: 0.1rem;
      -webkit-text-stroke-color: #fff;
    }
  }
`;
