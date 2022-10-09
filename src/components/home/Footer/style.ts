import styled from 'styled-components';

export const Footer = styled.footer`
  color: #fff;
  background-color: ${({ theme }) => theme.palette.black};
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 6.1rem 4.9rem;
  padding: 3.4rem 1.7rem 0;
  text-align: center;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  &:nth-child(1) {
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-left: 0;
  }
  &:nth-child(2) {
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-right: 0;
    border-left: 0;
  }
  &:nth-child(3) {
    grid-column: 1 / 3;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.05);
  }
  h2 {
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    /* color: #fff; */
  }
  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.main};
  }
  .contact-time {
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const InfoForCustomer = styled.section`
  margin: 0 3rem;
  h2 {
    margin: 3.2rem 0 2rem;
    font-weight: 600;
    font-size: 1.6rem;
  }
  ul {
    display: flex;
    font-weight: 500;
    font-size: 1.2rem;
  }
  li {
    margin-right: 2rem;
  }
`;
