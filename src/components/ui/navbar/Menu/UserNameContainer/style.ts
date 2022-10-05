import styled from 'styled-components';

export const UserNameWrapper = styled.div`
  margin: 0.7rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user-name {
    font-size: 1.4rem;
    & span {
      font-size: 1.6rem;
      font-weight: 600;
      word-break: keep-all;
    }
  }
  .icon-wrapper i {
    margin-left: 1.6rem;
    cursor: pointer;
  }
`;