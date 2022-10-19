import React from 'react';
//STYLED
import * as S from './style';
//ICONS
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons';
//COMPONENTS
import OrderGuideTitle from 'components/itemDetail/OrderGuide/OrderGuideTitle';
//CONSTANTS
import { orderGuideTitle, IorderGuideTitle } from 'utils/constants';
const OrderGuide = () => {
  return (
    <S.OrderGuideContainer>
      <p className="order-guide-header">도움말</p>
      {}
      {orderGuideTitle.map((item: IorderGuideTitle) => (
        <OrderGuideTitle item={item} key={item.id} />
      ))}
    </S.OrderGuideContainer>
  );
};

export default OrderGuide;
