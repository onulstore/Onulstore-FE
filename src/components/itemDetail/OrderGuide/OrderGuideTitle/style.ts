import styled from 'styled-components';

interface Props {
  changeArrowIcon: any;
}
export const OrderGuideTitleContainer = styled.div<Props>`
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ changeArrowIcon }) => (changeArrowIcon ? 'none' : '2px solid #d6d6d6')};
    padding: 20px 14px;
    box-sizing: border-box;

    .header-title {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #2f2f33;
    }
  }
`;
