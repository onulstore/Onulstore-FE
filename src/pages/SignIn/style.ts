import styled from 'styled-components';

export const Greeting = styled.div`
  margin-top: 3.9rem;
  margin-left: 3.7rem;
`;
export const Text = styled.div`
  margin-top: 1.23rem;
  margin-bottom: 3.7rem;
  .greeting {
    font-family: Montserrat;
    color: #2f2f33;
    font-style: normal;
    letter-spacing: 0.005em;
    &:first-child {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
    &:last-child {
      font-weight: 500;
      font-size: 34px;
      line-height: 40px;
    }
  }
`;
export const BtnWrapper = styled.div`
  margin: 0 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
