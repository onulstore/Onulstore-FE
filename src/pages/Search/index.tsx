import { useEffect, useState } from 'react';
import SearchedKeywords from 'components/search/SearchedKeywords';
import SearchHeader from 'components/search/SearchHeader';
import { Outlet, useLocation } from 'react-router-dom';
import { useSearchResult } from 'components/search/hooks';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';

function Search() {
  const pathname: string = useLocation().pathname;
  const searchResult = useSearchResult();

  const [searched, setSearched] = useState(() => {
    const loadedSearched = localStorage.getItem('searched')
      ? JSON.parse(localStorage.getItem('searched')!)
      : [];
    return loadedSearched as string[];
  });

  useEffect(() => {
    if (!searchResult) return;
    const newRecentKeyword = [...new Set([searchResult, ...searched])].slice(0, 5);
    window.localStorage.setItem('searched', JSON.stringify(newRecentKeyword));
    setSearched(newRecentKeyword);
  }, [searchResult]);

  const onDeleteHandler = (targetKeyword: string) => {
    const restKeyword = searched.filter((keyword: string) => {
      return keyword !== targetKeyword;
    });
    setSearched(restKeyword);
    window.localStorage.setItem('searched', JSON.stringify(restKeyword));
  };

  const onAllDeleteHandler = () => {
    setSearched([]);
    window.localStorage.setItem('searched', '[]');
  };

  return (
    <>
      <SearchHeader />
      {'/search' === pathname && (
        <>
          <SearchedKeywords
            canDelete
            title={'최근 검색어'}
            data={searched}
            onDelete={onDeleteHandler}
            onAllDelete={onAllDeleteHandler}
          />
          <SearchedKeywords
            title={'인기 검색어'}
            data={['가방', '프리미엄 디퓨저', '에어 피트 드로즈', '손목 보호대']}
          />
        </>
      )}
      <Outlet />
    </>
  );
}

export default SetBottomTabBar(Search);
