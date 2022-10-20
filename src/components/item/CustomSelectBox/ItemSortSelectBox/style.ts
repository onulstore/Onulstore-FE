import styled from 'styled-components';

export const CustomSelectBoxContainer = styled.div`
  height: 5.1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 2.4rem;
  gap: 16.2rem;

  border-bottom: 1px solid #d6d6d6;
  box-sizing: border-box;

  .all-item {
    font-size: 1.4rem;
    color: #505050;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 1.5;
    font-weight: 400;
  }

  .filter-bar {
    font-size: 1.4rem;
    font-weight: 500;
    color: #505050;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    .filter-bar-title {
      padding-right: 1.8rem;
      box-sizing: border-box;

      font-weight: 500;
      font-size: 1.4rem;
      color: #505050;
    }
  }
`;
