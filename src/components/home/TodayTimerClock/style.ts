import styled from 'styled-components';

export const TodayTimerClock = styled.div`
  position: relative;
  height: 6rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.palette.black};
  & .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 1.2rem;
  & div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.8rem;
    }
  }
`;
