import { BagIcon, WishListIcon, MenuMyPageIcon, OrderListIcon } from 'components/Icons';
import { useNavigate } from 'react-router-dom';
import { MenuOpenProps } from '..';
import * as S from './style';

const UserInfoIconNavBar = ({ isOpen, setIsOpen }: MenuOpenProps) => {
  const navigate = useNavigate();
  return (
    <S.NavIconWrapper>
      <li>
        <S.IconWrapper
          onClick={() => {
            navigate('/my-page');
            setIsOpen(!isOpen);
          }}
        >
          <MenuMyPageIcon />
          <span>마이페이지</span>
        </S.IconWrapper>
      </li>
      <li>
        <S.IconWrapper
          onClick={() => {
            navigate('/order-list');
            setIsOpen(!isOpen);
          }}
        >
          <OrderListIcon />
          <span>주문/배송</span>
        </S.IconWrapper>
      </li>
      <li>
        <S.IconWrapper
          onClick={() => {
            navigate('/wish-list');
            setIsOpen(!isOpen);
          }}
        >
          <WishListIcon />
          <span>위시리스트</span>
        </S.IconWrapper>
      </li>
      <li>
        <S.IconWrapper
          onClick={() => {
            navigate('/about-onul');
            setIsOpen(!isOpen);
          }}
        >
          <BagIcon />
          <span>회사소개</span>
        </S.IconWrapper>
      </li>
    </S.NavIconWrapper>
  );
};

export default UserInfoIconNavBar;
