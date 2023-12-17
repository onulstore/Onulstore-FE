import styled from 'styled-components';
export const QandAInfoContainer = styled.div`
  box-sizing: border-box;

  min-height: 60rem;

  position: relative;
  .q-and-a-header {
    padding: 3rem 3rem 2.5rem 2.5rem;
    box-sizing: border-box;
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
  .none-msg {
    position: absolute;
    top: 12.2rem;
    left: 10.9rem;
    font-weight: 600;
    font-size: 1.6rem;
    color: #a9a9a9;
  }
`;
