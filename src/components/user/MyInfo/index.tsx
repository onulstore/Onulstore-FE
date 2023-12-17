import { useAppSelector, useUserSlice } from 'store/hooks';
import MyInfoForm from '../MyInfoForm';
import * as S from './style';

function MyInfo() {
  const { lastName, firstName } = useUserSlice();
  return (
    <S.Container>
      <MyInfoForm firstName={firstName} lastName={lastName} btn={'회원정보 관리'} path="review" />
      <hr />
      <MyInfoForm label={'포인트'} content={'500P'} btn={'내 포인트 현황'} path="" />
      <MyInfoForm label={'쿠폰'} content={'3개'} btn={'내 쿠폰 보기'} path="" />
    </S.Container>
  );
}

export default MyInfo;
