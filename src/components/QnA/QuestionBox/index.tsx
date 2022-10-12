import React from 'react';
//styled
import * as S from './style';
//components

const QuestionBox = () => {
  return (
    <S.QuestionBoxContainer>
      <section className="question-box-container__header">
        <p className="question-register-date">2022.09.17</p>
        <p className="user-name">abcMan</p>
      </section>

      <section className="question-box-container__body">
        <p className="question-content">배송이 한달째 안오고 있습니다.</p>
        <div className="answer-state">답변 대기중</div>
      </section>
    </S.QuestionBoxContainer>
  );
};

export default QuestionBox;
