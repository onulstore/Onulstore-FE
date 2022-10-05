import styled from 'styled-components';
export const DeliveryGuideContainer = styled.ul`
  padding: 0 1.4rem 3.5rem 1.4rem;
  box-sizing: border-box;

  color: #2f2f33;
  font-size: 1.2rem;
  line-height: 1.4rem;
  .deeps-level1-li {
    &:nth-child(4) {
      padding-bottom: 2.5rem;
      box-sizing: border-box;
    }
    .deeps-level2-li {
      &:nth-child(5) {
        padding: 2.5rem 0;
        display: inline-block;
        box-sizing: border-box;
      }
      &:nth-child(6) {
        padding-bottom: 2.5rem;
        display: inline-block;
        box-sizing: border-box;
      }
    }
  }
`;
