import styled from 'styled-components';

export const LargeCategoryModalContainer = styled.div`
  height: 81.2rem;
  background-color: rgba(0, 0, 0, 0.7);
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
      font-weight: 600;
      line-height: 1.5;
      font-size: 20px;
      color: #505050;
      &:hover {
        color: #d86145;
        text-decoration: underline;
      }
    }
  }
`;
