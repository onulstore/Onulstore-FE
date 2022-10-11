import styled from 'styled-components';
import { ItemBox } from 'pages/Items/style';

export const SearchResults = styled.div`
  .search-keyword {
    height: 5.8rem;
    margin: 1rem 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    word-break: keep-all;
    color: ${({ theme }) => theme.palette.midGrey};
    border-top: 0.1rem solid ${({ theme }) => theme.palette.whiteGrey};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.whiteGrey};
    span {
      margin-right: 2rem;
      text-align: center;
      font-weight: 600;
      color: ${({ theme }) => theme.palette.black};
    }
  }
  .wrapper {
    height: 5.1rem;
  }
`;

export const ItemBoxCopy = styled(ItemBox)``;
