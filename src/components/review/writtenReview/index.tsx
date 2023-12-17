import React from 'react';
//styled
import * as S from './style';
import { SmallReviewOnIcon } from 'components/Icons/index';
import dumyBg from 'assets/dumyBg.png';
const WrittenReview = () => {
  const dumyRate = [1, 2, 3, 4, 5];

  return (
    <S.WrittenReviewContainer>
      <section className="written-review-header">
        <div className="rate-container">
          <span>
            {dumyRate.map((item, index) => {
              return <SmallReviewOnIcon key={index} />;
            })}
          </span>
          <p className="user-name">abc****</p>
        </div>

        <p className="written-date">2022.09.17</p>
      </section>

      <section className="written-review-body">
        <p className="review-content">
          가방 사이즈가 생각보다 커서 안에 이것저것 잘 들어가고 친구들이 예쁘다고 해서 좋아요
        </p>

        <img src={dumyBg} alt="더미데이터" className="review-img" />
      </section>
    </S.WrittenReviewContainer>
  );
};

export default WrittenReview;
