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
  height: 2.35rem;
  & svg {
    cursor: pointer;
    margin-left: 2rem;
  }
`;

export const HeaderCenter = styled.div`
  width: auto;
  text-align: center;
  position: relative;
  left: 0;
  right: 0;
  color: #26252a;
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 600;
  .Catagory {
    cursor: pointer;
  }
  & svg {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 10px;
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
