import React from 'react';
import * as S from './style';

const AnswerBox = () => {
  return (
    <S.AnswerBoxContainer>
      <div className="question-content-container">
        <section className="answer-box-container__header">
          <p className="answer-register-date">2022.09.17</p>
          <p className="user-name">abcMan</p>
        </section>

        <section className="question-box-container__body">
          <p className="question-content">배송이 한달째 안오고 있습니다.</p>
          <div className="answer-state">답변 완료</div>
        </section>
      </div>

      <div className="answer-content-container">
        <h1 className="answer-title">답변</h1>
        <p className="answer-content">
          안녕하세요. Around ann 입니다. 죄송하지만 현재 재고를 주문 순서에 따라 순차 출고 중에 있어
          다음 주 내 출고될 예정임을 안내드립니다. 너그러이 기다려주셔서 감사합니다.
        </p>
      </div>
    </S.AnswerBoxContainer>
  );
};

export default AnswerBox;
