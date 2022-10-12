import React, { useEffect } from 'react';
import * as S from './style';
import PaymentForm from 'components/payment/PaymentForm';
import axios from 'axios';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

const Payment = () => {
  return (
    <S.PaymentContainer>
      <PaymentForm />
    </S.PaymentContainer>
  );
};

export default SetHeaderBar(Payment);
