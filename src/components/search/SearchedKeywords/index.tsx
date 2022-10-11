import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from 'components/Icons';
import theme from 'style/theme';
import * as S from './style';

function SearchedKeywords({ title, data, recent, setSearched, setclickedKeyword }: any) {
  const navigate = useNavigate();

  const searchHandler = (searchKeyword: string) => {
    setclickedKeyword(searchKeyword);
    navigate(`results`);
  };
  const deleteHandler = (targetKeyword: string) => {
    const searched = data;
    const restKeyword = searched.filter((keyword: string) => {
      return keyword !== targetKeyword;
    });
    setSearched(restKeyword);
  };
  const allDeleteHandler = () => {
    setSearched([]);
  };
  return (
    <S.RecentSearch>
      <div className="wrapper">
        <h1>{title}</h1>
        {recent && (
          <button
            onClick={() => {
              allDeleteHandler();
            }}
          >
            모두 지우기
          </button>
        )}
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
              {recent && (
                <button
                  onClick={() => {
                    deleteHandler(keyword);
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
