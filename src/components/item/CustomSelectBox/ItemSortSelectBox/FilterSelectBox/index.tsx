import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import { FilterBarTitle, IfilterBarTitle } from 'utils/constants';
//STORE
import { useAppDispatch } from 'store/hooks/index';
import { itemSortHandler } from 'store/slices/itemSlice';

interface Props {
  isShowFilterSelectBox: boolean;
  setIsShowFilterSelectBox: Dispatch<SetStateAction<boolean>>;
}
const FilterSelectBox = () => {
  const dispatch = useAppDispatch();
  const sortHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
    dispatch(itemSortHandler(e.currentTarget.innerHTML));
  };

  return (
    <S.FilterSelectBoxContainer>
      {FilterBarTitle.map((item: IfilterBarTitle) => {
        return (
          <div key={item.id} className="filter-box">
            <p
              className="box-title"
              onClick={(e) => {
                sortHandler(e);
              }}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </S.FilterSelectBoxContainer>
  );
};

export default FilterSelectBox;
