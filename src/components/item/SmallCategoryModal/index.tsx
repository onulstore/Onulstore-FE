import React, { useEffect } from 'react';
import * as S from './style';
//COMPONENT
import NowPositionBar from 'components/item/NowPositionBar';
import SmallCategoryModalItem from '../SmallCategoryModalItem';
//CONSTANT
import { SmallCategoryModalItemContent, IsmallCategoryModalItemContent } from 'utils/constants';

const SmallCategoryModal = () => {
  return (
    <div>
      <S.SmallCategoryModalContainer>
        <div className="content">
          {SmallCategoryModalItemContent.map((item: IsmallCategoryModalItemContent) => {
            return <SmallCategoryModalItem key={item.id} item={item} />;
          })}
        </div>
      </S.SmallCategoryModalContainer>
    </div>
  );
};

export default SmallCategoryModal;
