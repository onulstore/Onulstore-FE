import * as S from './style';

function WeLikeNavBar() {
  return (
    <div>
      <S.WeLikeNavBar>
        <ul>
          <li>
            <S.NavStyle to={'magazine'}>MAGAZINE</S.NavStyle>
          </li>
          <li>
            <S.NavStyle to={'our-picks'}>OUR PICKS</S.NavStyle>
          </li>
        </ul>
      </S.WeLikeNavBar>
    </div>
  );
}

export default WeLikeNavBar;
