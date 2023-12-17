import styled from 'styled-components';
interface Props {
  count: number;
  point?: boolean;
}
export const Box = styled.div<Props>`
  width: 8.3rem;
  height: 7.1rem;
  background: #fafafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  color: ${({ count, point, theme }) =>
    count > 0 ? (point ? theme.palette.main : theme.palette.black) : '#a9a9a9'};
  text-align: center;
  letter-spacing: 0.005em;

  .count {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  .description {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;
