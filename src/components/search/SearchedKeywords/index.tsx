import React from 'react';
import theme from 'style/theme';
import * as S from './style';
import { useGoSearchResults } from '../hooks';
import { CloseIcon } from 'components/Icons';

function SearchedKeywords({ title, data, canDelete, onDelete, onAllDelete }: any) {
  const goSearchResult = useGoSearchResults();
  const searchHandler = (searchKeyword: string) => {
    goSearchResult(searchKeyword);
  };

  return (
    <S.RecentSearch>
      <div className="wrapper">
        <h1>{title}</h1>
        {canDelete && <button onClick={onAllDelete}>모두 지우기</button>}
      </div>
      <ul>
        {data?.length > 0 ? (
          data.map((keyword: string, index: number) => (
            <li key={index}>
              <span
                onClick={() => {
                  searchHandler(keyword);
                }}
              >
                {keyword}
              </span>
              {canDelete && (
                <button
                  onClick={() => {
                    onDelete(keyword);
                  }}
                >
                  <CloseIcon width="1rem" height="1rem" color={theme.palette.midGrey} />
                </button>
              )}
            </li>
          ))
        ) : (
          <div className="empty">{title}가 없습니다.</div>
        )}
      </ul>
    </S.RecentSearch>
  );
}

export default SearchedKeywords;
