import React from 'react';
//STYLED
import * as S from './style';
//ICONS
import { PencilIcon } from 'components/Icons';
const ReviewInfo = () => {
  return (
    <S.ReviewInfoContainer>
      <section className="review-header">
        <p className="review-count">Review (0)</p>
        <p className="move-review-page-text">
          리뷰쓰기
          <span className="pencil-icon">
            <PencilIcon />
          </span>
        </p>
      </section>
    </S.ReviewInfoContainer>
  );
};

export default ReviewInfo;
