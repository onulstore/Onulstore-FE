import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//STYLED
import * as S from './style';
//ICONS
import { PencilIcon } from 'components/Icons';
import QnABox from 'components/QnA/QnABox';
const QandAInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const moveQnAPage = () => {
    navigate('/qna', { state: params });
  };

  return (
    <S.QandAInfoContainer>
      <section className="q-and-a-header">
        <p className="q-and-a-count">Q&A (0)</p>
        <p className="move-q-and-a-page-text" onClick={moveQnAPage}>
          문의하기
          <span className="pencil-icon">
            <PencilIcon />
          </span>
        </p>
      </section>

      {true ? <QnABox /> : <p className="none-msg">작성된 Q&A가 없습니다.</p>}
    </S.QandAInfoContainer>
  );
};

export default QandAInfo;
