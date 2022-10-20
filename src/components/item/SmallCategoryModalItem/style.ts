import styled from 'styled-components';

export const SmallCategoryModalItemContainer = styled.div`
  width: 29.6rem;

  padding: 1rem 0.5rem;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;

  .category__nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid #a9a9a9;

    box-sizing: border-box;
    .category-title {
      padding: 0.5rem;
      box-sizing: border-box;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5;
      color: #a9a9a9;
    }
  }
  .category__element-container {
    margin: 1.5rem 1rem 0;
    .category-element {
      color: #505050;
      font-weight: 600;
      font-size: 1.6rem;
      font-family: 'Montserrat' sans-serif;

      margin-bottom: 1rem;
      :hover {
        color: #d86145;
      }
    }
  }
`;
