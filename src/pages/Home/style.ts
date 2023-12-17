import styled from 'styled-components';

export const TimeBar = styled.div`
  height: 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: -0.023em;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.darkGrey};
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

export const Home = styled.div`
  .scroll-nav-bar {
    margin-top: 3rem;
  }
  .magazine {
    background-color: #fafafc;
    padding: 3rem 0;
  }
  .trend {
    margin-top: 6.6rem;
  }
  .our-picks {
    margin-top: 4rem;
  }
`;
