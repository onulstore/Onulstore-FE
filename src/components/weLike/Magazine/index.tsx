import magazineImg from 'assets/images/we-like_magazine_1.png';
import ItemAlbum from 'components/item/ItemAlbum';
import { ITEMS } from 'utils/test_constants';
import * as S from './style';

function Magazine({ data, home }: any) {
  return (
    <S.Magazine home={home}>
      <div className="img-container">
        <img src={magazineImg} alt="magazine" />
      </div>
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
        <ItemAlbum item={ITEMS[0]} index={0} />
        <ItemAlbum item={ITEMS[0]} index={1} />
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
