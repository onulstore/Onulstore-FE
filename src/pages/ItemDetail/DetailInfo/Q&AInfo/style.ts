import styled from 'styled-components';
export const QandAInfoContainer = styled.div`
  padding: 3rem 3rem 3.5rem 2.5rem;
  box-sizing: border-box;
  .q-and-a-header {
    display: flex;
    justify-content: space-between;
    .q-and-a-count {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.4rem;
      color: #2f2f33;
    }
    .move-q-and-a-page-text {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: #505050;

      .pencil-icon {
        padding-left: 1rem;
        box-sizing: border-box;
      }
    }
  }
`;
