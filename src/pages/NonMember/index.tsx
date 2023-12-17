import LargeBtn from 'components/ui/LargeBtn';
import { useNavigate } from 'react-router-dom';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import * as S from './style';

function NonMember() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <div className="text">
        <p className="title">비회원 주문조회</p>
        <p className="description">
          비회원 상품을 구매하신 경우에만
          <br />
          주문/배송조회가 가능합니다.
        </p>
      </div>
      <div className="wrapper">
        <input type="text" className="input" placeholder="주문번호" />
        <input type="text" className="input" placeholder="이름" />
        <div className="btn-wrapper">
          <LargeBtn
            onClick={() => {
              alert('😎 개발중인 메뉴입니다. 🥳');
            }}
          >
            주문배송조회
          </LargeBtn>
          <LargeBtn
            color="#F5F5F5"
            height={5}
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인 화면으로 가기
          </LargeBtn>
        </div>
      </div>
    </S.Container>
  );
}

export default SetHeaderBar(SetBottomTabBar(NonMember));
