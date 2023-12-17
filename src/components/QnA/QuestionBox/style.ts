import styled from 'styled-components';

export const QuestionBoxContainer = styled.div`
  min-height: 10.2rem;
  padding: 1.5rem 0 2.5rem;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 1.2rem;
  border-bottom: 0.1rem solid #d6d6d6;
  .question-box-container__header,
  .question-box-container__body {
    padding: 0 3rem 0 3.5rem;
  }

  .question-box-container__header {
    display: flex;
    margin-bottom: 3.3rem;
    .question-register-date {
      margin-right: 2rem;
    }
  }

  .question-box-container__body {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .question-content {
      width: 14.8rem;

      display: flex;
      flex-wrap: wrap;
    }

    .answer-state {
      padding: 1rem;
      box-sizing: border-box;
      color: #505050;

      border: 0.1rem solid #505050;
      border-radius: 0.3rem;
    }
  }
`;
