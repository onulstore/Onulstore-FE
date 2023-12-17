import styled from 'styled-components';

export const TodayItems = styled.section`
  font-family: 'Montserrat';
  margin: 0 2rem;
  h1 {
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.palette.black};
    span {
      margin-left: 0.6rem;
    }
  }
`;
export const TodayItem = styled.div`
  margin: 3.2rem 0 1.5rem;
  .img-container {
    position: relative;
    width: 33.5rem;
    height: 33.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const TodayItemInfo = styled.div`
  color: ${({ theme }) => theme.palette.black};
  & .item-info {
    margin: 1.9rem 0 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 130%;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin: 0.2rem 0;
  }
  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .discount-container {
    display: flex;
    flex-direction: column;
  }
  .prediscount {
    margin: 1.2rem 0 0.8rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.midGrey};
    text-decoration-line: line-through;
  }
  .price {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 150%;
    color: ${({ theme }) => theme.palette.black};
  }
  .discount-wrapper {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 2rem;
  }
  .discount {
    margin-right: 0.8rem;
    color: ${({ theme }) => theme.palette.main};
  }
`;
