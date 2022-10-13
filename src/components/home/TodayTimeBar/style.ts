import styled from 'styled-components';

export const TimeBar = styled.div`
  height: 2.7rem;
  padding-top: 1.5rem;
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: -0.023em;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.darkGrey};
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
  .current-time {
    width: 6rem;
    margin: 0 0.2rem;
    text-align: center;
  }
  span {
    position: relative;
    bottom: 0.1rem;
  }
`;
