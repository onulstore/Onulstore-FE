import styled from 'styled-components';

export const Box = styled.div<{ count: number }>`
  width: 15.9rem;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.white};

  color: ${({ count, theme }) => (count > 0 ? theme.palette.black : '#a9a9a9')};
  text-align: center;
  letter-spacing: 0.005em;
  .count {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  .description {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-right: 1.9rem;
  }
`;
