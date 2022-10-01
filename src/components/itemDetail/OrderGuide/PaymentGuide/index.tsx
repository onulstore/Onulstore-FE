import React from 'react';
import * as S from './style';
const PaymentGuide = () => {
  return (
    <S.PaymentGuideContainer>
      <h1>결제 수단은 다음과 같습니다.</h1>

      <ul className="credit-card-payment-guide">
        <li>
          - 신용 카드 결제
          <ul className="credit-card-payment-type">
            <li>- Visa</li>
            <li>- MasterCard</li>
            <li>- JBC</li>
          </ul>
        </li>
      </ul>

      <h2 className="credit-precautions-text">
        ※ 결제시 카드 회사에 따라 해외 이용 수수료가 부과되는 경우가 있습니다만, 카드 회사가
        고객에게 해외 이용 수수료를 청구하는 것이므로 미리 양해해 주시도록 부탁드립니다.
      </h2>

      <ul className="another-payment-guide">
        <li>
          -편의점 결제
          <ul>
            <li>
              -LAWSON·MINISTOP{' '}
              <a href="#" target="blank">
                https://www.econtext.jp/support/cvs/lawson.html
              </a>
            </li>
            <li>
              -FAMILYMART <a href="#">https://www.econtext.jp/support/cvs/familymart.html</a>
            </li>
            <li>
              -SEICOMART <a href="#">https://www .econtext.jp/support/cvs/seicomart.html</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="another-precautions-text">
        <p>
          덧붙여 편의점 결제, 은행 송금을 선택한 경우, Eximbay 결제
          대행사(webmaster@eximbay.com)로부터 지불의 안내 메일을 보내 드리고 있습니다 . 결제 안내
          메일에 기재되어 있는 URL에 액세스해 주시면 편의점별로 상세한 결제 방법을 확인하실 수
          있습니다. 결제에 관한 메일은 자동 메일로 전달하고 있기 때문에, 재전송하기 어렵습니다.
        </p>
        <h2>※스팸 메일 폴더로 분류되어 있을 가능성도 있으므로, 한번 확인을 부탁드립니다.</h2>
      </div>

      <p>또한 5일 이내에 입금이 확인되지 않은 경우 자동 취소되므로 주의해 주십시오.</p>
    </S.PaymentGuideContainer>
  );
};

export default PaymentGuide;
