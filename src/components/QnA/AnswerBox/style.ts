import styled from 'styled-components';
export const AnswerBoxContainer = styled.div`
  background: #f5f5f5;

  min-height: 22.4rem;
  padding: 1.5rem 0 2.5rem;
  box-sizing: border-box;

  font-size: 1.2rem;

  border-bottom: 0.1rem solid #d6d6d6;

  .question-content-container,
  .answer-content-container {
    padding: 0 3rem 0 3.5rem;
  }

  .question-content-container {
    margin-bottom: 3rem;
    .answer-box-container__header {
      display: flex;
      margin-bottom: 3.3rem;
      .answer-register-date {
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
        color: #d86145;

        border: 0.1rem solid #d86145;
        border-radius: 0.3rem;
      }
    }
  }

  .answer-content-container {
    .answer-title {
      color: #d86145;
      margin-bottom: 0.6rem;
    }
    .answer-content {
      line-height: 1.4rem;
    }
  }
`;
