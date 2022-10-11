import styled from 'styled-components';

export const ReviewPageContainer = styled.div`
  padding: 2.7rem 2rem 0;
  box-sizing: border-box;
  .item-to-review-container {
    display: flex;
    .item-img {
      height: 10rem;
      margin-right: 1.9rem;
      box-sizing: border-box;
    }
    .item-info {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      .brand-name {
        font-weight: 700;
        color: #2f2f33;
        line-height: 1.5;
      }
      .item-name {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.5;
        padding: 0.7rem 0 1rem;
        box-sizing: border-box;
      }
      .item-size {
        font-weight: 400;
        line-height: 1.5;
        color: #a9a9a9;
      }
    }
  }

  .rating-star-container {
    padding: 2.7rem 0 3rem;
    box-sizing: border-box;
  }
  textarea::placeholder {
    color: #a9a9a9;
  }
  .review-content {
    padding: 1rem;
    gap: 1rem;
    color: #a9a9a9;

    width: 33.5rem;
    height: 13.9rem;

    border: 0.1rem solid #d6d6d6;
    border-radius: 0.5rem;

    resize: none;
  }

  .upload-image {
    display: flex;
    margin: 3rem 0 2rem;
    .image-uploader {
      width: 7.5rem;
      height: 7.3rem;
      margin-right: 1rem;
      padding: 1rem;
      box-sizing: border-box;

      gap: 0.7rem;
      background: #2f2f33;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: #fff;
      font-size: 1.2rem;
      font-weight: 500;
    }

    input[type='file'] {
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }

  .caution-msg {
    color: #a9a9a9;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-bottom: 22.5rem;
  }
`;

export const RegisterBtn = styled.div`
  .register-btn {
    position: fixed;
    top: 0;
  }
`;
