import { nanoid } from 'nanoid';

export const pageName: { [key: string]: string } = {
  // key 이름은 페이지의 path가 정확히 정해지면 수정할 예정
  '/login': 'LOGIN',
  '/join': 'JOIN',
  '/mypage': 'MY PAGE',
  '/today': 'TODAY',
  '/welike': 'WE LIKE',
  '/detail': '',
  '/cart': 'CART',
  '/review': '리뷰쓰기',
  '/qna': '문의하기',
};

export const signUpReg = {
  ID_REGEX: new RegExp('^[a-z0-9_-]{5,20}$'),
  PW_REGEX: new RegExp('^[a-zA-Z0-9]{8,16}$'),
  EMAIL_REGEX: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  PHONE_REGEX: new RegExp('^[0-9]{5,15}$'),
  NAME_REGEX: new RegExp('^[ㄱ-ㅎ|가-힣]{1,9}$'),
};

export const SIGNUP_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자와 숫자, 특수문자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
  invalidEmail: '이메일 형식에 일치하지 않습니다.',
  invalidPhone: '휴대폰 번호 형식에 일치하지 않습니다.',
  invalidName: '이름 형식 일치하지 않습니다.',
};

//Item 영역 타입 정의
export interface IfilterBarTitle {
  id: string;
  title: string;
}

export interface IdetailNavigationData {
  id: string;
  title: string;
  path: string;
}

export interface IorderGuideTitle {
  id: string;
  title: string;
}
// Item 영역 상수 모음
export const FilterBarTitle: IfilterBarTitle[] = [
  {
    id: nanoid(),
    title: '최신순',
  },
  {
    id: nanoid(),
    title: '판매순',
  },
  {
    id: nanoid(),
    title: '리뷰순',
  },
  {
    id: nanoid(),
    title: '인기순',
  },
];

export const DetailNavigationData: IdetailNavigationData[] = [
  {
    id: nanoid(),
    title: '상품정보',
    path: 'iteminfo',
  },

  {
    id: nanoid(),
    title: '리뷰보기',
    path: 'reviewinfo',
  },

  {
    id: nanoid(),
    title: '문의하기',
    path: 'qandainfo',
  },

  {
    id: nanoid(),
    title: '도움말',
    path: 'orderguide',
  },

  {
    id: nanoid(),
    title: '비슷한상품',
    path: 'similaritem',
  },
];

export const orderGuideTitle: IorderGuideTitle[] = [
  {
    id: nanoid(),
    title: '지불 정보',
  },
  {
    id: nanoid(),
    title: '배송 정보',
  },
  {
    id: nanoid(),
    title: '교환/환불안내',
  },
];
