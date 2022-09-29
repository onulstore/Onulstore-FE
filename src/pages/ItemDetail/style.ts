import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
  .item-bg {
    height: 37.5rem;
  }

  .item-info {
    padding: 2.4rem 2.4rem 1.8rem;
    box-sizing: border-box;
    .item-brand {
      display: flex;
      justify-content: space-between;
      .brand-name {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.5;
      }
    }
    .item-title {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      color: #2f2f33;
      padding: 1.1rem 0 4.4rem 0;
      box-sizing: border-box;
    }

    .item-price {
      .original-price {
        text-decoration: line-through;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.5;
        color: #a9a9a9;
      }
      .discount {
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 1.5;
        .discount-price {
          color: #2f2f33;
        }
        .discount-percent {
          color: #d86145;
          padding-right: 1.4rem;
          box-sizing: border-box;
        }
      }
    }
  }

  .actions {
    display: flex;
    position: fixed;
    bottom: 0;
  }
`;
