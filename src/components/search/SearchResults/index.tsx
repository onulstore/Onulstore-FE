import React, { useEffect, useState } from 'react';
import * as S from './style';
import ItemAlbum from 'components/item/ItemAlbum';
import { useSearchResult } from '../hooks';
import { useAppDispatch, useSearchSlice } from 'store/hooks';
import { getSearch } from 'utils/Api/searchApi';

function SearchResults() {
  const searchResult = useSearchResult();
  const dispatch = useAppDispatch();
  const { searchData } = useSearchSlice();
  useEffect(() => {
    dispatch(getSearch(searchResult));
  }, [searchResult]);
  return (
    <S.SearchResults>
      <div className="search-keyword">
        <span>{searchResult}</span> 에 대한 검색결과 입니다.
      </div>
      <S.ItemBoxCopy>
        {searchData?.length > 0 ? (
          searchData.map((item: any, index: number) => {
            return <ItemAlbum key={item.id} item={item} index={index} />;
          })
        ) : (
          <div className="empty">일치하는 정보를 찾을 수 없습니다.</div>
        )}
      </S.ItemBoxCopy>
    </S.SearchResults>
  );
}

export default SearchResults;
