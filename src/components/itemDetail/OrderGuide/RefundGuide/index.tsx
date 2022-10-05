import React from 'react';
//STYLED
import * as S from './style';
const RefundGuide = () => {
  return (
    <S.RefundGuideContainer>
      <li className="deeps-level1-li">
        1. 주문 취소
        <ul className="deeps-level2-ul">
          <li className="deeps-level2-li">
            대해 주문 상태가 "입금 확인"또는 "발송 준비 중"상태의 주문만 가능합니다. 주문 취소를
            원하시는 분은 메일로 연락 부탁드립니다.
          </li>
        </ul>
      </li>

      <li className="deeps-level1-li" style={{ padding: '2.5rem 0', boxSizing: 'border-box' }}>
        2. 교환 및 반품
        <ul className="deeps-level2-ul">
          <li className="deeps-level2-li">
            ※ 해외 배송 상품의 특성상 고객의 사정에 교환 및 반품은 받을 수없는 경우도 있으므로
            사전에 문의하십시오. (칼라·사이즈의 교환 ​​등 포함한다) 또한, 고객 사정에 의한 교환 및
            반품될 때, 왕복 해외 우송료 및 관세·부가가치세 등은 고객의 부담이 되므로 충분히 주의하신
            후, 주문을 부탁드립니다 합니다.
            <ul className="deeps-level3-ul">
              <li className="deeps-level3-li">
                -주소 [06223] 서울특별시 강남구 테헤란로 28길 42 (역삼동) 5 층 태그가 붙은 상태의
                상품의 상품 잘못 보내진 상품 불량품, 또는 손상되어 도착한 상품 교환 및 환불의 수속에
                있어서 통신 판매 사이트와 사전 협의를 끝낸 경우
              </li>
              <li className="deeps-level3-li">
                - 교환·반품을 받을 수 없는 상품 고객님께서 상처 또는 파손이 생긴 상품 곤포를 열거나,
                훼손되어 상품 가치를 상실된 경우
              </li>
              <li className="deeps-level3-li">
                - 사용후 혹은 일부 소비에 의해 상품 가치가 현저하게 감소했을 경우
              </li>
              <li className="deeps-level3-li">
                - 시간의 경과에 의해 재 판매할 수 없을 정도로 상품가치가 현저하게 감소했을 경우
              </li>
              <li className="deeps-level3-li">
                복제가 가능한 상품 등의 포장을 훼손한 경우 통신 판매 사이트의 교환 및 반품 수속을
                이행하고 있지 않은 경우 (자세히, 메일로 문의해 주세요.)
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li className="deeps-level1-li">
        3. 반품 방법
        <ul className="deeps-level2-ul">
          <li className="deeps-level2-li">
            상품의 반품을 희망하시는 경우는, 우선은 메일로 연락해 주십시오. 하기 【반품의 순서】를
            보시고, 수속을 부탁드립니다.
            <ul className="deeps-level3-ul">
              <li className="deeps-level3-li">
                【반품의 순서】
                <ol className="deeps-level4-ol">
                  <li className="deeps-level4-li">
                    1)상품 수령일로부터 14일 이내에, 결함인 것을 증명할 수 있는 화상(상품 전체 화상
                    및 결함의 확대 화상)을 첨부해, 주문 번호, 오배달/결함 상품 번호, 환불 이유 등의
                    정보와 함께 메일로 송부 부탁드립니다.
                  </li>
                  <li className="deeps-level4-li">
                    2) 반품 신청이 접수되면 나중에 별도로 연락드립니다.
                  </li>
                  <li className="deeps-level4-li">
                    3) 반품시 패키지 (상자, 포장 비닐 등) 안에 주문 번호, 구매자 이름, 회원 ID를
                    기재한 메모를 동봉하여 보내주십시오.
                    <ul className="deeps-level5-ul">
                      <li className="deeps-level5-li">
                        ※ 반품 신청이나 신청 접수 등 수속 없이 반송되는 경우는 반품 및 환불 처리를
                        할 수 없으므로 양해 바랍니다.
                      </li>
                      <li className="deeps-level5-li">
                        ※ 반품할 때의 우송료는, 귀책 사유에 의해 처리됩니다.
                        <ul className="deeps-level6-ul">
                          <li className="deeps-level6-li">
                            - 변신에 의한 칼라나 사이즈의 교환 ​​등 고객의 사정에 의한 경우의 반품
                            우송료는 손님의 부담 - 오배달·불량품등 폐사 책임의 경우의 반품 우송료는
                            폐사에서 부담 합니다.
                          </li>
                        </ul>
                      </li>
                      <li className="deeps-level5-li">
                        ※ 해외 배송을 위해, 수취인 지불을 할 수 없기 때문에 상품 발송 후, 우송료에
                        대한 영수증을 메일로 보내 주세요. 확인 후 환불하겠습니다.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </S.RefundGuideContainer>
  );
};

export default RefundGuide;
