import styled from 'styled-components';

export const LargeCategoryModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  z-index: 9999;
  .content {
    height: 32.6rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 117px 46px;
    gap: 10px;
    box-sizing: border-box;
    p {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      font-size: 2rem;
      color: #505050;
      &:hover {
        color: #d86145;
        text-decoration: underline;
      }
    }
  }
`;
