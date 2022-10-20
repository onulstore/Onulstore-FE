import styled from 'styled-components';

export const NowPositionBarContainer = styled.div`
  height: 4.4rem;

  display: flex;
  align-items: center;

  padding: 1rem 2.4rem;
  gap: 1.4rem;

  border-bottom: 1px solid rgba(214, 214, 214, 0.5);

  .parent-path {
    font-size: 1.6rem;
    font-weight: 500;
    color: #a9a9a9;
  }
  .arrow-right-icon {
    margin: 0 1.5rem;
  }
  .child-path {
    color: #505050;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
