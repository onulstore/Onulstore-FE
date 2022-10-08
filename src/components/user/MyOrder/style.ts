import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;

  .detail {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1px;
  }
  .cancel-box {
    background: #fafafc;
    padding: 0 0.8rem 0.8rem;
    .cancel {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 31.9rem;
      height: 5.4rem;
      background-color: ${({ theme }) => theme.palette.white};
      .hr {
        border-right: 1px solid #e1e1e1;
        height: 1.2rem;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  .text {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.005em;
    color: ${({ theme }) => theme.palette.black};
    margin-right: 1rem;
  }
`;
