import React, { useState } from 'react';
import * as S from './style';
import ItemFilterBar from 'components/item/ItemFilterBar';
import ItemAlbum from 'components/item/ItemAlbum';
import { useSearchResult } from '../hooks';

function SearchResults({ searchedItemList }: any) {
  const searchResult = useSearchResult();
  const [isShowFilterSelectBox, setIsShowFilterSelectBox] = useState(false);
  return (
    <S.SearchResults>
      <div className="search-keyword">
        <span>{searchResult}</span> 에 대한 검색결과 입니다.
      </div>
      <ItemFilterBar
        filterSeletBoxHandler={setIsShowFilterSelectBox}
        isShowFilterSelectBox={isShowFilterSelectBox}
      />
      <S.ItemBoxCopy>
        {searchedItemList?.length > 0 ? (
          searchedItemList.map((item: any, index: number) => {
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
