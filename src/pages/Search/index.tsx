import SearchedKeywords from 'components/search/SearchedKeywords';
import SearchHeader from 'components/search/SearchHeader';
import React, { useEffect, useState } from 'react';

function Search() {
  const getSearched = localStorage.getItem('searched')
    ? JSON.parse(localStorage.getItem('searched')!)
    : [];
  const uniqueKeywords = [...new Set(getSearched)];
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
  return (
    <>
      <SearchHeader setSearched={setSearched} />
      <SearchedKeywords recent title={'최근 검색어'} data={searched} />
      <SearchedKeywords
        title={'인기 검색어'}
        data={['가방', '프리미엄 디퓨저', '에어 피트 드로즈', '손목 보호대']}
      />
    </>
  );
}

export default Search;
