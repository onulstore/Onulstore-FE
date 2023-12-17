import React, { useState } from 'react';

//ICONS
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons';
//STYLED
import * as S from './style';
//CONSTANTS
import { IorderGuideTitle } from 'utils/constants';
import PaymentGuide from 'components/itemDetail/OrderGuide/PaymentGuide';
import DeliveryGuide from 'components/itemDetail/OrderGuide/DeliveryGuide';
import RefundGuide from 'components/itemDetail/OrderGuide/RefundGuide';
interface Props {
  item: IorderGuideTitle;
}

const OrderGuideTitle = ({ item }: Props) => {
  const [isPaymentGuide, setIsPaymentGuide] = useState(false);
  const [isDeliveryGuide, setIsDeliveryGuide] = useState(false);
  const [isRefundGuide, setIsRefundGuide] = useState(false);
  const [changeArrowIcon, setChangeArrowIcon] = useState(false);
  const orderGuideModalHandler = () => {
    setChangeArrowIcon(!changeArrowIcon);
    switch (item.title) {
      case '지불 정보':
        return setIsPaymentGuide(!isPaymentGuide);
      case '배송 정보':
        return setIsDeliveryGuide(!isDeliveryGuide);
      case '교환/환불안내':
        return setIsRefundGuide(!isRefundGuide);
    }
  };

  return (
    <S.OrderGuideTitleContainer onClick={orderGuideModalHandler} changeArrowIcon={changeArrowIcon}>
      <div className="header-container">
        <p className="header-title">{item.title}</p>
        <span>
          {changeArrowIcon ? (
            <ArrowTopIcon width="1rem" height="1.7rem" color="#D6D6D6" />
          ) : (
            <ArrowBottomIcon width="1rem" height="1.7rem" color="#D6D6D6" />
          )}
        </span>
      </div>
      {isPaymentGuide && <PaymentGuide />}
      {isDeliveryGuide && <DeliveryGuide />}
      {isRefundGuide && <RefundGuide />}
    </S.OrderGuideTitleContainer>
  );
};

export default OrderGuideTitle;
