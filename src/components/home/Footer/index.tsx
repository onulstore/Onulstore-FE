import React from 'react';
import * as S from './style';

const ContactInfo = () => {
  return (
    <section>
      <S.Grid>
        <S.Item>
          <h2>고객센터</h2>
          <span>050-3558-2356</span>
        </S.Item>
        <S.Item>
          <h2>E-mail</h2>
          <span>info@onulstore.jp</span>
        </S.Item>
        <S.Item>
          <span className="contact-time">월 ~ 금 10:00 - 17:00 (토, 일, 공휴일 휴무)</span>
        </S.Item>
      </S.Grid>
    </section>
  );
};

function Footer() {
  return (
    <S.Footer>
      <ContactInfo />
    </S.Footer>
  );
}

export default Footer;
