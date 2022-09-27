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
    gap: 12px;
  }
`;
export const Terms = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #505050;
  width: 238px;
  height: 28px;
  a {
    color: #1a68ff;
  }
`;
