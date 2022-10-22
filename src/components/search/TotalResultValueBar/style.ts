import theme from 'style/theme';
import styled from 'styled-components';

const whiteGrey = theme.palette.whiteGrey;
const midGrey = theme.palette.midGrey;
const darkGrey = theme.palette.darkGrey;
const black = theme.palette.black;

export const TotalResultValueBar = styled.div`
  width: 33.5rem;
  height: 5.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .total-result-value {
    font-weight: 600;
    font-size: 1.6rem;
    color: ${black};
  }
`;

export const SelectBox = styled.div`
  position: relative;
`;
export const SelectContatiner = styled.div`
  width: 8.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${darkGrey};
  span {
    margin-right: 1.8rem;
  }
`;
export const SelectOptionList = styled.ul`
  position: absolute;
  width: 9.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;
  overflow: hidden;
  z-index: 3;
  li {
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${whiteGrey};
    text-align: center;
    color: ${midGrey};
    &:hover {
      color: ${darkGrey};
      background-color: ${whiteGrey};
    }
  }
`;
