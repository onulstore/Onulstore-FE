import React from 'react';
import * as S from './style';
import { AngleRightIcon } from 'components/Icons';
import theme from 'style/theme';
import MyOrderDetail from '../MyOrderDetail';
import MyOrderCancel from '../MyOrderCancel';
import { useNavigate } from 'react-router-dom';

function MyOrder() {
  const navigate = useNavigate();
  return (
    <S.Container>
      {/* 주문내역 라우터 */}
      <S.Title
        onClick={() => {
          navigate('/');
        }}
      >
        <p className="text">내 주문 내역</p>
        <AngleRightIcon color={theme.palette.black} width="6" height="10" />
      </S.Title>

      <div className="detail">
        <MyOrderDetail count={1} description={'입금 대기'} />
        <MyOrderDetail count={2} description={'배송 준비중'} point />
        <MyOrderDetail count={0} description={'배송중'} />
        <MyOrderDetail count={3} description={'배송 완료'} />
      </div>
      <div className="cancel-box">
        <div className="cancel">
          <MyOrderCancel count={1} description={'취소'} />
          <div className="hr" />
          <MyOrderCancel count={0} description={'반품'} />
        </div>
      </div>
    </S.Container>
  );
}

export default MyOrder;
