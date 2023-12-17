import React from 'react';
//STYLED
import * as S from './style';
//ICONS
import { PencilIcon } from 'components/Icons';
//REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom';
import { useItemSlice } from 'store/hooks';
//COMPONENT
import WrittenReview from 'components/review/writtenReview';
//Dumy
import dumyBg from 'assets/dumyBg.png';

const ReviewInfo = () => {
  const navigate = useNavigate();
  const { singleItemList } = useItemSlice();
  return (
    <S.ReviewInfoContainer>
      <section className="review-header">
        <p className="review-count">Review (0)</p>
        <p
          className="move-review-page-text"
          onClick={() => {
            navigate('/review', { state: singleItemList });
          }}
        >
          리뷰쓰기
          <span className="pencil-icon">
            <PencilIcon />
          </span>
        </p>
      </section>

      {false ? (
        <p className="none-msg">작성된 리뷰가 없습니다</p>
      ) : (
        <div>
          <section className=" represent-img">
            <img src={dumyBg} alt="가방" className="item" />
            <img src={dumyBg} alt="가방" className="item" />
            <img src={dumyBg} alt="가방" className="item" />
          </section>

          <WrittenReview />
          <WrittenReview />
          <WrittenReview />
          <WrittenReview />
          <WrittenReview />
          <WrittenReview />
          <WrittenReview />
        </div>
      )}
    </S.ReviewInfoContainer>
  );
};

export default ReviewInfo;
