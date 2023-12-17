import styled from 'styled-components';

export const WrittenReviewContainer = styled.div`
  width: 33.5rem;
  height: 10.7rem;

  gap: 1.3rem;
  margin-top: 1.7rem;
  border-bottom: 0.1rem solid #d6d6d6;
  .written-review-header {
    display: flex;
    justify-content: space-between;
    .rate-container {
      display: flex;
    }
    .written-date {
    }
  }

  .written-review-body {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0;
    .review-content {
      width: 21.7rem;

      font-size: 1.2rem;
      line-height: 1.4rem;
      color: #2f2f33;
    }
    .review-img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;
