import styled from 'styled-components';

export const OurPicksList = styled.ul`
  margin-bottom: 6.7rem;
`;

export const OurPicksDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.4rem;
  height: 2.6rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.palette.black};
  border-radius: 10rem;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: -0.023em;
  color: #fff;
`;
