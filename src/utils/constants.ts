import { nanoid } from 'nanoid';

export const pageName: { [key: string]: string } = {
  // key 이름은 페이지의 path가 정확히 정해지면 수정할 예정
  '/login': 'LOGIN',
  '/sign-up': 'JOIN',
  '/my-page': 'MY PAGE',
  '/user-edit': '회원정보 변경',
  '/my-coupons': '내 쿠폰',
  '/my-points': '내 포인트',
  '/my-orders': '내 주문 내역',
  '/my-reviews': 'MY REVIEWS',
  '/find-email': '이메일 찾기',
  '/my-qna': 'MY Q&A',
  '/cart': 'CART',
  '/payment': 'CHECKOUT',
  '/order-confirm': 'APPOINTENT',
  '/today': 'TODAY',
  '/we-like/magazine': 'WE LIKE',
  '/we-like/our-picks': 'WE LIKE',
  '/wish-list': 'WISH LIST',
  '/recent': 'RECENT',
  '/completed': 'COMPLETED',
  '/fail': 'FAIL',
  '/review': '리뷰쓰기',
  '/qna': '문의하기',
  '/privacy-policy': ' 개인정보 처리 방침',
  '/terms-of-service': '이용약관',
};

export const signUpReg = {
  ID_REGEX: new RegExp('^[a-z0-9_-]{5,20}$'),
  PW_REGEX: new RegExp('^[a-zA-Z0-9]{8,16}$'),
  EMAIL_REGEX: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  PHONE_REGEX: new RegExp('^[0-9]{5,15}$'),
  NAME_REGEX: new RegExp('^[ㄱ-ㅎ|가-힣|a-z|A-Z]{1,9}$'),
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

export interface IsmallCategoryModalItemContent {
  id: string;
  category: string;
  categoryElement: IcategoryElement[];
}

export interface IcategoryElement {
  id: string;
  title: string;
  parent: string;
}

// Item 영역 상수 모음
export const FilterBarTitle: IfilterBarTitle[] = [
  {
    id: nanoid(),
    title: '이름순',
  },
  {
    id: nanoid(),
    title: '가격순',
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

export const SmallCategoryModalItemContent: IsmallCategoryModalItemContent[] = [
  {
    id: nanoid(),
    category: 'ITEMS',
    categoryElement: [
      {
        title: 'ALL',
        id: nanoid(),
        parent: 'ITEMS',
      },
    ],
  },

  {
    id: nanoid(),
    category: 'FASHION',
    categoryElement: [
      {
        title: 'ALL',
        id: nanoid(),
        parent: 'FASHION',
      },

      {
        title: 'BAG',
        id: nanoid(),
        parent: 'FASHION',
      },
    ],
  },

  {
    id: nanoid(),
    category: 'LIVING',
    categoryElement: [
      {
        title: 'ALL',
        id: nanoid(),
        parent: 'LIVING',
      },

      {
        title: 'SPORTS',
        id: nanoid(),
        parent: 'LIVING',
      },

      {
        title: 'LIFE STYLE',
        id: nanoid(),
        parent: 'LIVING',
      },
    ],
  },

  {
    id: nanoid(),
    category: 'BEAUTY',
    categoryElement: [
      {
        title: 'ALL',
        id: nanoid(),
        parent: 'BEAUTY',
      },

      {
        title: 'COSME',
        id: nanoid(),
        parent: 'BEAUTY',
      },
    ],
  },
];

export const BANNER: { [key: string]: string }[] = [
  {
    id: 'DeUY6EWzDsEGARD5XcQg_',
    path: '/today',
    url: 'src/assets/images/home_banner_img_1.png',
    name: '이미지01',
  },
  {
    id: '5SAetnxye-2lVNMIV35Ey',
    path: '/',
    url: 'src/assets/images/home_banner_img_2.png',
    name: '이미지02',
  },
  {
    id: 'LnPOwcAxXCN-gREvCvFKW',
    path: '/',
    url: 'src/assets/images/home_banner_img_3.png',
    name: '이미지03',
  },
  {
    id: 'KnPOwcAxXCN-gREvCvFNW',
    path: '/',
    url: 'src/assets/images/home_banner_img_4.png',
    name: '이미지04',
  },
];

export const TODAY_ITEMS: { [key: string]: string | number | {}[] }[] = [
  {
    id: 1,
    brand: 'meelabs',
    productName: '픽스 손목 보호대',
    price: 3500,
    productImage: [{ imageName: 'src/assets/images/today_thumbnail_1.png' }],
    discount: 10, // 데이터 확인 필요
  },
  {
    id: 2,
    brand: 'CHIRO CARE',
    productName: '커브 넥',
    price: 8500,
    productImage: [{ imageName: 'src/assets/images/today_thumbnail_2.png' }],
    discount: 12, // 데이터 확인 필요
  },
];
