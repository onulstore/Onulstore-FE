import styled from 'styled-components';

export const ItemAlbumContainer = styled.div`
  width: 16.2rem;
  height: 29.1rem;

  font-family: 'Montserrat', sans-serif;

  box-sizing: border-box;

  position: relative;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item-bg {
    width: 16.2rem;
    height: 16.2rem;
    background-color: #f3f3f3;

    display: flex;
    justify-content: space-between;
    position: relative;
    .rank-box {
      width: 3.7rem;
      height: 3.7rem;
      padding: 0.8rem 1.5rem;
      box-sizing: border-box;
      z-index: 2;

      font-family: 'Pretendard', sans-serif;

      color: #fff;
      background-color: #2f2f33;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item-icon {
      font-size: 2rem;
      box-sizing: border-box;
      padding: 1.1rem 0.9rem;
      z-index: 2;

      position: absolute;
      right: 0;
      top: 0;

      height: 3rem;
    }
    .item-bg {
      position: absolute;
      top: 0;
    }
  }
  .item-info {
    display: flex;
    flex-direction: column;

    .item-title-container {
      display: flex;
      justify-content: space-between;

      padding: 1.05rem 1.5rem 0 0.6rem;
      box-sizing: border-box;
      .item-title {
        width: 10rem;

        font-weight: 700;
        font-size: 1.2rem;
        line-height: 130%;
        color: #2f2f33;
      }
      .item-status {
        width: 4.6rem;
        height: 1.9rem;

        line-height: 1.5;
        background-color: #f5f5f5;
        border-radius: 0.5rem;
        box-sizing: border-box;
        margin-left: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .item-description {
      padding: 0.7rem 0.4rem 0;
      font-size: 1.5rem;
      line-height: 1.3;
      box-sizing: border-box;

      display: flex;
      align-items: center;
    }

    .item-price {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 150%;
      color: #2f2f33;
      padding: 0.7rem 0.4rem;
      box-sizing: border-box;
      .discount-purcent {
        color: #d86145;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 150%;
        box-sizing: border-box;
        padding-right: 0.8rem;
      }
    }
    .review-and-like {
      box-sizing: border-box;
      .small-review-icon {
        border-right: 0.1rem solid #d9d9d9;
        margin-right: 0.7rem;
        padding-right: 0.6rem;
        box-sizing: border-box;
      }
    }
  }
`;
