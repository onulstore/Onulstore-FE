import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import * as S from './style';
import ItemFilterBar from 'components/item/ItemFilterBar';
import ItemAlbum from 'components/item/ItemAlbum';

function SearchResults({ allItemList }: any) {
  const [isShowFilterSelectBox, setIsShowFilterSelectBox] = useState(false);
  const { currentSearch } = useOutletContext<{ currentSearch: string }>();
  return (
    <S.SearchResults>
      <div className="search-keyword">
        <span>{currentSearch}</span> 에 대한 검색결과 입니다.
      </div>
      <ItemFilterBar
        filterSeletBoxHandler={setIsShowFilterSelectBox}
        isShowFilterSelectBox={isShowFilterSelectBox}
      />
      <S.ItemBoxCopy>
        {allItemList?.length > 0 &&
          allItemList.map((item: any) => {
            return <ItemAlbum key={item.id} item={item} />;
          })}
      </S.ItemBoxCopy>
    </S.SearchResults>
  );
}

export default SearchResults;
