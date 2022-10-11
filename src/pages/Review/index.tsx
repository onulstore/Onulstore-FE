import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//REACT-SIMPLE-STAR-RATING
import { Rating } from 'react-simple-star-rating';
//STYLED
import * as S from './style';
//ICONS
import { LargeReviewIcon, UploadIcon } from 'components/Icons';
//dumy image
import dumyBg from 'assets/dumyBg.png';
//naonId
import { nanoid } from 'nanoid';
//component
import UploadedImg from 'components/review/uploadedImg';
//ui
import RegisterBtn from 'components/ui/CommonBlackBtn';
import Spinner from 'components/ui/Loading';
//store
import { useReviewSlice, useAppDispatch } from 'store/hooks';
import { addBase64Img, Ibase64 } from 'store/slices/reviewSlice';
//api
import { IsingItemList } from 'store/slices/itemSlice';
import { addReview } from 'utils/Api/reviewApi';

interface LocationStateType {
  state: IsingItemList;
}

const Review = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const { state } = useLocation() as LocationStateType;
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { base64Store, isLoding } = useReviewSlice();

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const getContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.currentTarget.value);
  };

  const encodeFileToBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (base64Store.length > 1) {
      alert('이미지는 2장까지 업로드 할 수 있습니다!');
      return;
    }
    let reader = new FileReader();
    const imageFiles = (e.target as HTMLInputElement).files;

    //파일을 업로드 했을때 이미지를 인코딩 하는 작업을 하는 로직
    reader.onloadend = () => {
      const encodingImage = reader.result;
      if (encodingImage) {
        dispatch(addBase64Img({ img: encodingImage, id: nanoid() }));
      }
    };
    //인코딩된 이미지를 저장하는 files에 저장하는 로직
    if (imageFiles) {
      reader.readAsDataURL(imageFiles[0]);
    }
  };

  //review등록
  const test = {
    productId: state.id,
    rate: rating,
    title: '타이틀은 사용되지 않음',
    content: review,
  };
  const finishReviewHandler: React.MouseEventHandler = () => {
    if (review.trim().length < 10) {
      alert('리뷰를 10자 이상 입력 해 주세요!');
      return;
    }
    // dispatch(
    //   addReview({
    //     productId: state.id,
    //     rate: rating,
    //     title: '타이틀은 사용되지 않음',
    //     content: review,
    //   }),
    // );
    console.log(test);
    alert('리뷰등록이 완료되었습니다');
    navigate(`/items/${state.id}/reviewinfo`);
  };

  return (
    <>
      <S.ReviewPageContainer>
        {isLoding && <Spinner />}
        <section className="item-to-review-container">
          <img
            src={dumyBg}
            alt={`${state?.brand.brandName} ${state?.productName}`}
            className="item-img"
          />
          <div className="item-info">
            <p className="brand-name">{state?.brand.brandName}</p>
            <p className="item-name">{state?.productName}</p>
            <p className="item-size">[사이즈] Free</p>
          </div>
        </section>

        <div className="rating-star-container">
          <Rating
            onClick={handleRating}
            transition={true}
            size={27}
            fillIcon={<LargeReviewIcon fill="#D86145" stroke="#D86145" />}
            emptyIcon={<LargeReviewIcon fill="" stroke="#A9A9A9" />}
          />
        </div>

        <textarea
          className="review-content"
          cols={30}
          rows={10}
          minLength={10}
          placeholder="리뷰는 최소 10자 이상 작성해주세요. 사진 첨부는 직접 촬영한 것만 가능하며 욕설, 비속어가 포함된 리뷰는 사전 고지 없이 삭제 될 수 있습니다."
          onChange={getContentHandler}
        ></textarea>

        <section className="upload-image">
          <label htmlFor="fileUploadInput" className="image-uploader">
            <UploadIcon />
            사진 첨부
          </label>
          <input
            type="file"
            className="img-upload-input"
            id="fileUploadInput"
            onChange={encodeFileToBase64}
          />

          {base64Store.length > 0 &&
            base64Store.map((item: Ibase64) => {
              return <UploadedImg item={item} key={item.id} />;
            })}
        </section>
        <p className="caution-msg">사진은 2장까지 등록가능합니다</p>
      </S.ReviewPageContainer>
      <S.RegisterBtn onClick={finishReviewHandler}>
        <RegisterBtn width="37.5rem" height="7.1rem" title="등록하기" />
      </S.RegisterBtn>
    </>
  );
};
export default Review;
