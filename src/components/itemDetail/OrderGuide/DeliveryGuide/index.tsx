import React from 'react';
import * as S from './style';
const DeliveryGuide = () => {
  return (
    <S.DeliveryGuideContainer>
      <li className="deeps-level1-li">배송 방법 : 택배</li>
      <li className="deeps-level1-li">배송지역 : 전국</li>
      <li className="deeps-level1-li">배송비 : ¥ 800</li>
      <li className="deeps-level1-li">배송 기간 : 7일 ~ 14일</li>
      <li className="deeps-level1-li">
        배송 가이드 :
        <ul className="deeps-level2-ul">
          <li className="deeps-level2-li">
            ※상품은 한국으로부터의 해외 발송입니다.
            <ul className="deeps-level3-ul">
              <li className="deeps-level3-li">
                * 고객이 주문한 상품은 입금 확인 후 약 3 ~ 5 영업일 이내에 발송하겠습니다. 배송
                기간은 약 7-14 영업일입니다.
              </li>
            </ul>
          </li>

          <li className="deeps-level2-li">
            ※상품종류에 의해 상품 준비 및 발송이 조금 늦는 경우가 있습니다. 또한, 대폭 발송 지연이
            예상되는 경우, 고객에게 사전에 알려드립니다.
          </li>

          <li className="deeps-level2-li">※당일 발송은 불가능하므로 양해 바랍니다.</li>

          <li className="deeps-level2-li">
            ※해외 발송을 위해, 배송의 일시 지정 등, 배송에 관한 요망에 대해서는 폐사에서는 할 수
            없기 때문에 미리 양해 바랍니다.
            <ul className="deeps-level3-ul">
              <li className="deeps-level3-li">
                * 배송 상황은 아래 URL에서 사이트로 들어가고,도착국의 송장 번호를 체크하고, 메일로
                도착한 송장 번호를 입력하면 확인하실 수 있습니다. ( 다른 것을 체크하고 송장 번호를
                입력해도 배송 상황은 볼 수 없습니다. )
                <a href="#">https://cbt.sttd.kr/Track/Search</a>
              </li>
            </ul>
          </li>

          <li className="deeps-level2-li">
            ※배송에 시간이 걸리는 경우 ・토, 일, 공휴일, 한국의 연휴 등 사이에 끼인 경우・해외
            배송을 위해, 악천후/ 관세 검사 등에 시간이 걸렸을 경우 경우가 있습니다. 거기서 발생한
            관세 등에 관해서는 손님의 부담이 되기 때문에, 미리 양해 바랍니다.
            <ul className="deeps-level3-ul">
              <li className="deeps-level3-li">
                *관세는 일본에서의 범람이며, 본 사이트와는 관련이 없습니다. 자세한 내용은 가까운
                관세 상담관에 문의하십시오.
                <a href="#">http://www.customs.go.jp/tetsuzuki/c-answer/sonota/9301_jr.htm</a>
              </li>
            </ul>
          </li>

          <li className="deeps-level2-li">
            ※상품이 폐사에 반송되는 경우 장기 부재 또는 주소명·수신처의 실수에 의해, 택배 업자에게
            가지고 돌아갈 수 있었을 경우의 보관 기한은 약 10일입니다. 부재시에는 빨리 재배달 의뢰를
            부탁드립니다. 부재표가 들어 있지 않은 경우라도, 당사에서는 일체 책임은 취하기
            어렵습니다. 일본에서 상품이 반송되는 경우는 왕복 우송료 및 수수료로서 일률 1,600엔을
            청구하겠습니다.
          </li>
        </ul>
      </li>
    </S.DeliveryGuideContainer>
  );
};

export default DeliveryGuide;
