import React, { useState } from 'react';
//STYLED
import * as S from './style';
//COMPONENTS
import QuestionBox from '../QuestionBox';
import AnswerBox from '../AnswerBox';

const QnABox = () => {
  const [isAnswer, setIsAnsewer] = useState(false);

  const isAnswerHandler = () => {
    setIsAnsewer(!isAnswer);
  };
  return (
    <S.QnABoxContainer>
      <div onClick={isAnswerHandler}>
        <QuestionBox />
      </div>

      {isAnswer && <AnswerBox />}
    </S.QnABoxContainer>
  );
};

export default QnABox;
