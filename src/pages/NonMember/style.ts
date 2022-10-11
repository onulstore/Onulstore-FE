import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 3.2rem;

  font-family: 'Pretendard';
  font-style: normal;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5.6rem;
    margin-bottom: 3.5rem;

    font-weight: 600;
    letter-spacing: 0.005em;
    .title {
      font-size: 20px;
      line-height: 24px;
      color: ${({ theme }) => theme.palette.black};
      margin-bottom: 1.3rem;
    }
    .description {
      font-size: 16px;
      line-height: 19px;
      color: ${({ theme }) => theme.palette.midGrey};
    }
  }
  .input {
    width: 31.1rem;
    height: 5rem;
    border: 1px solid #b1b1b1;
    padding-left: 1.7rem;
    margin-bottom: 1.2rem;
    &:nth-child(2) {
      margin-bottom: 2.4rem;
    }
  }
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;
