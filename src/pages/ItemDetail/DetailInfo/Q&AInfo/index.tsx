import React from 'react';
//STYLED
import * as S from './style';
//ICONS
import { PencilIcon } from 'components/Icons';
const QandAInfo = () => {
  return (
    <S.QandAInfoContainer>
      <section className="q-and-a-header">
        <p className="q-and-a-count">Q&A (0)</p>
        <p className="move-q-and-a-page-text">
          문의하기
          <span className="pencil-icon">
            <PencilIcon />
          </span>
        </p>
      </section>
    </S.QandAInfoContainer>
  );
};

export default QandAInfo;
