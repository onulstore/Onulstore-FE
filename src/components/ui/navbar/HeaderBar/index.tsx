import React from 'react';
import {
  ArrowLeftIcon,
  LogoIcon,
  SearchIcon,
  ShoppingBagIcon,
  CategoryArrowBottomIcon,
} from 'components/Icons';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { pageName } from 'utils/constants';
import { largeCategoryModalHandler } from '../../../../store/slices/itemSlice';
import { useAppDispatch } from '../../../../store/hooks/index';
// import {largeCategoryModalHandler} from '../store/slices/itemSlice'
// import {useAppDispatch} from '../../../store/hooks/index'
function HeaderBar() {
  const navigate = useNavigate();
  const pathname: any = useLocation().pathname;
  // pathname이라는 변수를 만들기보다 useLocation()에서 구조분해 할당으로 pathname을 빼오는게 더 좋아보입니다
  //구조분해 할당을 사용하지 않으셔도 pathName 즉 카멜케이스로 작성 해 주시면 어떨가합니다 ㅎㅎ
  //또한 타입을 any로 주셨는데 pathname의 타입은 string이기 때문에 any를 string으로 변경하는것은 어떨까요?
  const dispatch = useAppDispatch();

  return (
    <S.HeaderBar>
      {'/' === pathname ? (
        <S.HeaderLeft onClick={() => navigate('/')}>
          <LogoIcon />
        </S.HeaderLeft>
      ) : (
        <>
          <S.HeaderLeft
            onClick={() => navigate(-1)}
            style={pathname === '/' ? { marginLeft: '2rem' } : { marginLeft: '2.5rem' }}
            //S.HeaderLeft에 명시하신 margin-left는 1.5rem즉 15px인데 보니까 marginLeft가 로고일때는 20px이고 leftAllow아이콘일 때는 25px이여서 이렇게 했습니다!
          >
            <ArrowLeftIcon />
          </S.HeaderLeft>

          <S.HeaderCenter
            onClick={() => {
              dispatch(largeCategoryModalHandler());
            }}
          >
            <span className="Catagory">
              ITEMS
              {/* 개발편의상 잠시 하드 코딩해놓았습니다! */}
              {/* {pageName[pathname]} */}
            </span>
            <CategoryArrowBottomIcon />
          </S.HeaderCenter>
        </>
      )}
      <S.HeaderUl>
        <S.HeaderLi>
          <SearchIcon />
        </S.HeaderLi>
        <S.HeaderLi onClick={() => navigate('/cart')}>
          <ShoppingBagIcon />
        </S.HeaderLi>
      </S.HeaderUl>
    </S.HeaderBar>
  );
}

export default HeaderBar;
