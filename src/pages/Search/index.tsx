import React, { useEffect, useState } from 'react';
import SearchedKeywords from 'components/search/SearchedKeywords';
import SearchHeader from 'components/search/SearchHeader';
import { Outlet, useLocation } from 'react-router-dom';

function Search() {
  const pathname: string = useLocation().pathname;
  // 현재 검색어
  const [currentSearch, setCurrentSearch] = useState('');
  // 최근 검색어 저장 관련
  const getSearched = localStorage.getItem('searched')
    ? JSON.parse(localStorage.getItem('searched')!)
    : [];
  const uniqueKeywords = [...new Set(getSearched)]; // 중복 keyword 제거
  const [searched, setSearched] = useState(uniqueKeywords);
  const checkMaximumLength = (): boolean => {
    const MAXIMUM_LENGTH = 5;
    return searched.length > MAXIMUM_LENGTH;
  };
  useEffect(() => {
    const newRecentKeyword = checkMaximumLength() ? [...searched.slice(0, -1)] : searched;
    window.localStorage.setItem('searched', JSON.stringify(newRecentKeyword));
    setSearched(newRecentKeyword);
  }, [searched]);
  // 클릭된 검색어
  const [clickedKeyword, setclickedKeyword] = useState('');
  return (
    <>
      <SearchHeader setSearched={setSearched} setCurrentSearch={setCurrentSearch} />

      {'/search' === pathname && (
        <>
          <SearchedKeywords
            recent
            title={'최근 검색어'}
            data={searched}
            setSearched={setSearched}
            setclickedKeyword={setclickedKeyword}
          />
          <SearchedKeywords
            title={'인기 검색어'}
            data={['가방', '프리미엄 디퓨저', '에어 피트 드로즈', '손목 보호대']}
            setclickedKeyword={setclickedKeyword}
          />
        </>
      )}
      <Outlet context={{ currentSearch, clickedKeyword }} />
    </>
  );
}

export default Search;
