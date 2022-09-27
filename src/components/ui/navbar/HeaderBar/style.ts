import styled from 'styled-components';

export const HeaderBar = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const HeaderLeft = styled.div`
  width: 13rem;
  height: 2.35rem;
  cursor: pointer;
  & svg {
    margin-left: 2rem;
  }
`;

export const HeaderCenter = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  color: #26252a;
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 600;
  .Catagory {
    margin-right: 10px;
  }
`;

export const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
export const HeaderLi = styled.li`
  margin-right: 1.5rem;
  cursor: pointer;
`;
