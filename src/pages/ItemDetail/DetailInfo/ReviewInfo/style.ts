import styled from 'styled-components';
export const ReviewInfoContainer = styled.div`
  padding: 3rem 3rem 3.5rem 2.5rem;
  box-sizing: border-box;

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
`;
