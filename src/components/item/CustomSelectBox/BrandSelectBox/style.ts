import styled from 'styled-components';
export const BrandSelectBoxContainer = styled.div`
  width: 9rem;
  height: 3.5rem;
  padding: 0.7rem 1.2rem;
  box-sizing: border-box;

  position: absolute;
  top: 5.15rem;
  right: 11rem;

  display: flex;
  .brand-select-box-title {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.5;

    display: flex;
    align-items: center;
    text-align: center;

    margin-right: 1.8rem;
  }
  .brand-select-box-icon {
    display: flex;
    align-items: center;
  }
  .brand-select-box-element-container {
    display: flex;
    flex-direction: column;

    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;

    background-color: #fff;

    position: absolute;
    top: 4.7rem;
    left: -2.7rem;
    z-index: 999;
  }
`;
