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

export interface IFilterBarTitle {
  id: string;
  title: string;
}

export const FilterBarTitle: IFilterBarTitle[] = [
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
