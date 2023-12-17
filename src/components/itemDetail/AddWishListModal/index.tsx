import React, { useState } from 'react';
import * as S from './style';
import { AddWishListModalIcon } from 'components/Icons';

interface Props {
  addWishListModalHandler: () => void;
}

const AddWishListModal = ({ addWishListModalHandler }: Props) => {
  return (
    <S.AddWishListModalContainer>
      <section className="content-container">
        <div className="content">
          <span>
            <AddWishListModalIcon />
          </span>
          <h1 className="modal-state">Success!</h1>

          <p className="modal-msg">장바구니에 성공적으로 담았습니다.</p>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={addWishListModalHandler}>
            쇼핑 계속하기
          </button>
          <button className="btn">장바구니 가기</button>
        </div>
      </section>
    </S.AddWishListModalContainer>
  );
};

export default AddWishListModal;
