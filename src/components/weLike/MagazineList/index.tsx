import magazineImg1 from 'assets/images/we-like_magazine_1.png';
import magazineImg2 from 'assets/images/we-like_magazine_2.png';
import magazineImg3 from 'assets/images/we-like_magazine_3.png';
import ItemAlbum from 'components/item/ItemAlbum';
import { ITEMS } from 'utils/test_constants';
import * as S from './style';

export function MagazineList({ data, home }: any) {
  return (
    <>
      <S.Magazine home={home}>
        <div className="img-container">
          <img src={magazineImg1} alt="magazine" />
        </div>
        <S.CurationTextBox>
          <h2>
            <span>향기가 있어 더욱 즐거운 드라이브</span>
          </h2>
          <p>
            {/* . ? 다음에 <br />태그 넣는 로직 넣기*/}
            일상의 소소한 즐거움과 행복의 요소들이 더욱 소중해진 요즘. Lukta의 향기로 채워보는 건
            어때요?
            <br />
            달리는 여정 속 어디든 좋은 향기를 꽉 채워보아요.
          </p>
        </S.CurationTextBox>
        <S.CurationItemBox home={home}>
          <ItemAlbum item={ITEMS[2]} index={11} />
          <ItemAlbum item={ITEMS[3]} index={13} />
        </S.CurationItemBox>
      </S.Magazine>
    </>
  );
}

export function TestMagazine() {
  return (
    <>
      <S.Magazine>
        <div className="img-container">
          <img src={magazineImg1} alt="magazine" />
        </div>
        <S.CurationTextBox>
          <h2>
            <span>향기가 있어 더욱 즐거운 드라이브</span>
          </h2>
          <p>
            {/* . ? 다음에 <br />태그 넣는 로직 넣기*/}
            일상의 소소한 즐거움과 행복의 요소들이 더욱 소중해진 요즘. Lukta의 향기로 채워보는 건
            어때요?
            <br />
            달리는 여정 속 어디든 좋은 향기를 꽉 채워보아요.
          </p>
        </S.CurationTextBox>
        <S.CurationItemBox>
          <ItemAlbum item={ITEMS[2]} index={11} />
          <ItemAlbum item={ITEMS[3]} index={13} />
        </S.CurationItemBox>
      </S.Magazine>

      <S.Magazine>
        <div className="img-container">
          <img src={magazineImg2} alt="magazine" />
        </div>
        <S.CurationTextBox>
          <h2>
            <span>사랑스러운 클래식</span>
          </h2>
          <p>
            클래식하면서도 사랑스러운 무드의 현대적인 조화. <br />
            Around ann만의 다채로운 컬러로 표현된 사랑스러운 무드를 소개합니다.
          </p>
        </S.CurationTextBox>
        <S.CurationItemBox>
          <ItemAlbum item={ITEMS[4]} index={4} />
          <ItemAlbum item={ITEMS[5]} index={5} />
        </S.CurationItemBox>
      </S.Magazine>

      <S.Magazine>
        <div className="img-container">
          <img src={magazineImg3} alt="magazine" />
        </div>
        <S.CurationTextBox>
          <h2>
            <span>어제보다 더 나은 피부를 위해</span>
          </h2>
          <p>
            Dr.esthe는 기본적인 피부 케어를 넘어서 마음의 정화까지 함께 느낄 수 있는 경험을
            제공합니다. <br />
            건강한 피부로 가는 지름길. 사랑하는 나 또는 누군가를 위해 Dr.esthe를 선물해보세요.
          </p>
        </S.CurationTextBox>
        <S.CurationItemBox>
          <ItemAlbum item={ITEMS[6]} index={21} />
          <ItemAlbum item={ITEMS[7]} index={24} />
        </S.CurationItemBox>
      </S.Magazine>
    </>

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

// export default MagazineList;
