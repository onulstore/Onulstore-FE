import styled from 'styled-components';

export const SmallItemCard = styled.section`
  width: 100%;
  height: 10rem;
  display: flex;
  font-family: 'Montserrat';
  img {
    width: 10rem;
    height: 10rem;
    margin-right: 1.9rem;
    box-sizing: border-box;
  }
  &.our-picks {
    cursor: pointer;
    margin-top: 3.3rem;
  }
`;
export const ItemInfo = styled.div`
  display: flex;
  width: 100%;
  margin: 1.35rem 0;
  flex-direction: column;
  font-size: 1.2rem;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.black};
  .brand-name {
    font-weight: 700;
    line-height: 150%;
  }
  .item-name {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    margin: 0.7rem 0;
    box-sizing: border-box;
  }
  .item-count {
    margin-right: 2.4rem;
    color: ${({ theme }) => theme.palette.darkGrey};
  }
  .bottom-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceWrapper = styled.div`
  font-size: 1.4rem;
  .discount {
    margin-right: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.main};
  }
  .price {
    font-weight: 500;
  }
`;
export const WishLikeContainer = styled.div`
  width: 7.9rem;
  height: 2.1rem;
  box-sizing: border-box;
  display: flex;
  color: ${({ theme }) => theme.palette.midGrey};
  span {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    svg {
      margin-right: 0.5rem;
    }
    &::after {
      content: '';
      display: block;
      width: 0.1rem;
      height: 0.8rem;
      margin: 0 0.6rem;
      background-color: ${({ theme }) => theme.palette.lightMidGrey};
    }
    &:last-child::after {
      display: none;
    }
  }
`;
