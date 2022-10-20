import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import CommonBlackBtn from 'components/ui/CommonBlackBtn';
//store
import { useAppDispatch } from 'store/hooks';
//api
import { addQuestion } from 'utils/Api/QnA_Api';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
const QnA = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const getQnATitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const getQnAContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };
  const test = {
    secret: isSecret,
    content,
    title,
    productId: parseInt(state.id),
  };
  const finishQuestion = () => {
    dispatch(
      addQuestion({
        secret: isSecret,
        content,
        title,
        productId: parseInt(state.id),
      }),
    );
    console.log(test);
  };

  return (
    <S.QnAContainer>
      <div className="inner">
        <section className="title-container">
          <label htmlFor="title" className="title-container__label">
            제목
          </label>
          <input
            type="text"
            className="title-container__input"
            name="title"
            placeholder="제목을 입력해 주세요."
            onChange={getQnATitle}
          />
        </section>
        <section className="content-container">
          <label htmlFor="content" className="content-container__label">
            문의내용
          </label>
          <textarea
            name="content"
            cols={30}
            rows={10}
            placeholder="문의 내용을 남겨주세요."
            className="content-container__textarea"
            onChange={getQnAContent}
          />
        </section>

        <section className="private-or-public-container">
          <p className="private-or-public-container__title">공개 여부</p>

          <input
            type="radio"
            name="privateOrPublic"
            className="private-or-public__input"
            value="N"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              setIsSecret(false);
            }}
          />
          <label htmlFor="privateOrPublic" className="private-or-public__label">
            공개
          </label>

          <input
            type="radio"
            name="privateOrPublic"
            className="private-or-public__input"
            value="Y"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              setIsSecret(true);
            }}
          />
          <label htmlFor="privateOrPublic" className="private-or-public__label">
            비공개
          </label>
        </section>
      </div>
      <span className="register-btn" onClick={finishQuestion}>
        <CommonBlackBtn width="37.5rem" height="7.1rem" title="등록하기" />
      </span>
    </S.QnAContainer>
  );
};

export default SetHeaderBar(QnA);
