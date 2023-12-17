import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import Instargram from './Instargram';
import * as S from './style';

const Instar = () => {
  return (
    <S.Instar>
      <Section title={'INSTAGRAM'} instar>
        <Instargram />
      </Section>
    </S.Instar>
  );
};

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

const CustomerService = () => {
  return (
    <S.InfoForCustomer>
      <h2>고객 지원</h2>
      <ul>
        <li>
          <Link to={''}>특정 상거래법</Link>
        </li>
        <li>
          <Link to={''}>개인 정보 보호 정책</Link>
        </li>
      </ul>
    </S.InfoForCustomer>
  );
};
const AboutOnul = () => {
  return (
    <S.InfoForCustomer>
      <h2>기업 소개</h2>
      <ul>
        <li>
          <Link to={''}>회사개요</Link>
        </li>
        <li>
          <Link to={''}>회사정보</Link>
        </li>
        <li>
          <Link to={''}>이용 약관</Link>
        </li>
        <li>
          <Link to={''}>이용 안내</Link>
        </li>
      </ul>
    </S.InfoForCustomer>
  );
};

const OnulInfo = () => {
  return (
    <S.OnulInfo>
      법인명(상호) : 주식회사 그로스 컴퍼니
      <br />
      대표자(이름) : 구양일
      <br />
      전화번호 : 050-3558-2356
      <br />
      사업자등록번호 : 374-81-02214
      <br />
      주소 : 06223 서울특별시 강남구 테헤란로 28길 42(역삼동)
      <br />
      개인정보관리책임자 : 구양일(info@onulstore.jp)
      <br />
      Contact info@onulstore.jp for more information.
    </S.OnulInfo>
  );
};

function Footer() {
  return (
    <S.Footer>
      <Instar />
      <ContactInfo />
      <CustomerService />
      <AboutOnul />
      <OnulInfo />
    </S.Footer>
  );
}

export default Footer;
