import React from 'react';
import * as S from './style';
import { FilterBarTitle, IFilterBarTitle } from '../../../../utils/constants';
const FilterSelectBox = () => {
  return (
    <S.FilterSelectBoxContainer>
      {FilterBarTitle.map((item: IFilterBarTitle) => {
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
