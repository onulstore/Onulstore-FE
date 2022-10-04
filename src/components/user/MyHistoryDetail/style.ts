import styled from 'styled-components';

export const Container = styled.div<{ last: boolean }>`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  /* border-top: 1px solid ${({ theme }) => theme.palette.lightMidGrey}; */
  border-top: 1px solid #e5e5ec;

  ${({ last }) => last && 'border-bottom: 1px solid #e5e5ec;'}
  color: ${({ theme }) => theme.palette.darkGrey};
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.005em;

  .page-name {
    flex-grow: 1;
    font-weight: 400;
  }
  .count {
    flex-shrink: 0;
    font-weight: 500;
    margin-right: 1.3rem;
  }
`;
