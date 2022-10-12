import styled from 'styled-components';

export const QnAContainer = styled.div`
  .inner {
    min-height: 68rem;
    margin: 2.6rem 2rem 0;
    color: #2f2f33;
  }
  .title-container {
    display: flex;
    flex-direction: column;
    .title-container__label {
      font-weight: 700;
      font-size: 1.2rem;
    }
    .title-container__input {
      height: 4rem;
      border: 0.1rem solid #cfcfcf;
      border-radius: 0.5rem;
      margin: 2rem 0 1.4rem;
    }
    input::placeholder {
      color: #a9a9a9;
      font-weight: 400;
      font-size: 1.4rem;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    textarea::placeholder {
      color: #a9a9a9;
      font-weight: 400;
      font-size: 1.4rem;
    }
    .content-container__label {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
    .content-container__textarea {
      resize: none;
      border: 0.1rem solid #cfcfcf;
      border-radius: 0.5rem;
      margin: 1rem 0 2.8rem;
    }
  }
  .private-or-public-container {
    font-size: 1.2rem;
    .private-or-public-container__title {
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .private-or-public__input {
      vertical-align: text-top;
      margin: 0 1.2rem 0 0;
      accent-color: #505050;
    }
    .private-or-public__label {
      display: inline-block;
      vertical-align: 0.2rem;
      margin-right: 1.2rem;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #2f2f33;
    }
  }
  .register-btn {
    position: fixed;
    bottom: 0;
  }
`;
