import React from 'react';
import * as S from './style';
import { FilterBarTitle, IfilterBarTitle } from '../../../../utils/constants';
const FilterSelectBox = () => {
  return (
    <S.FilterSelectBoxContainer>
      {FilterBarTitle.map((item: IfilterBarTitle) => {
        return (
          <div key={item.id} className="filter-box">
            <p className="box-title">{item.title}</p>
          </div>
        );
      })}
    </S.FilterSelectBoxContainer>
  );
};

export default FilterSelectBox;
