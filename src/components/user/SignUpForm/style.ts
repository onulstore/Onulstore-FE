import styled from 'styled-components';

export const Form = styled.form`
  margin: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  &:nth-last-child(2) {
    gap: 0;
  }
  .name-wapper {
    width: 31.1rem;
    display: flex;
    gap: 1.2rem;
  }
`;
export const Terms = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.005em;
  color: #505050;
  width: 23.8rem;
  height: 2.8rem;
  a {
    color: #1a68ff;
  }
`;
