import styled from 'styled-components';
export const ReviewInfoContainer = styled.div`
  position: relative;
  min-height: 60rem;
  padding: 3rem 3rem 3.5rem 2.5rem;
  box-sizing: border-box;

  min-height: 53.6rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: hidden;
    width: 0;
  }
  .review-header {
    display: flex;
    justify-content: space-between;
    .review-count {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.4rem;
      color: #2f2f33;
    }
    .move-review-page-text {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: #505050;

      .pencil-icon {
        padding-left: 1rem;
        box-sizing: border-box;
      }
    }
  }

  .none-msg {
    position: absolute;
    top: 12.2rem;
    left: 11.1rem;

    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #a9a9a9;
  }
  .represent-img {
    display: flex;
    margin: 3.4rem 0;
    .item {
      width: 10.6rem;
      &:nth-child(2) {
        margin: 0 0.8rem;
      }
    }
  }
`;
