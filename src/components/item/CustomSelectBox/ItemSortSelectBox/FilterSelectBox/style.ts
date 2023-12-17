import styled from 'styled-components';
export const FilterSelectBoxContainer = styled.div`
  position: absolute;
  top: 9.5rem;
  right: 2rem;
  width: 9.1rem;
  z-index: 999;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  .filter-box {
    width: 100%;
    height: 3.5rem;

    border-bottom: 1px solid #f5f5f5;
    padding: 0.7rem 1rem;
    box-sizing: border-box;
    gap: 1rem;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #f5f5f5;
    }

    .box-title {
      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.5;
      color: #a9a9a9;
    }
  }
`;
