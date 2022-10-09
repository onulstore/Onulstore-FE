import ItemAlbum from 'components/item/ItemAlbum';
import React from 'react';
import { useItemSlice } from 'store/hooks';
import * as S from './style';

function Magazine({ data, home }: any) {
  // 임시 type
  return (
    <S.Magazine home={home}>
      <img src="src/assets/images/we-like_magazine_1.png" alt="magazine" />
      <S.CurationTextBox>
        <h2>
          <span>향기가 있어 더욱 즐거운 드라이브</span>
        </h2>
        <p>
          일상의 소소한 즐거움과 행복의 요소들이 더욱 소중해진 요즘. Lukta의 향기로 채워보는 건
          어때요?
          <br />
          달리는 여정 속 어디든 좋은 향기를 꽉 채워보아요.
        </p>
      </S.CurationTextBox>
      <S.CurationItemBox home={home}>
        <ItemAlbum item={data[0]} />
        <ItemAlbum item={data[0]} />
      </S.CurationItemBox>
    </S.Magazine>

    // 백데이터 프롭스
    // <S.Magazine>
    //   <img src={data.curationImg} alt={data.title} />
    //   <S.CurationTextBox>
    //     <h2>{data.title}</h2>
    //     <p>{data.content}</p>
    //   </S.CurationTextBox>
    //   <S.CurationItemBox>
    //     {data.product.map(item => (
    //      <ItemAlbum item={item}/>
    //    ))}
    //    </S.CurationItemBox>
    // </S.Magazine>
  );
}

export default Magazine;
