import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useItemSlice } from 'store/hooks';
// STYLED-COMPONENTS
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './components/layout/index';
// PAGES
import Home from './pages/Home';
import Items from 'pages/Items/index';
import ItemDetail from 'pages/ItemDetail';
import ItemInfo from 'pages/ItemDetail/DetailInfo/ItemInfo';
import Payment from 'pages/Payment';
import QnA from 'pages/QnA';
import ReviewInfo from 'pages/ItemDetail/DetailInfo/ReviewInfo';
import QandAInfo from 'pages/ItemDetail/DetailInfo/QnAInfo';
import OrderGuide from 'pages/ItemDetail/DetailInfo/OrderGuide';
import SimilarItem from 'pages/ItemDetail/DetailInfo/SimilarItem';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import Review from 'pages/Review';

import WishList from 'pages/WishList';
//COMPONENTS
import HeaderBar from 'components/ui/navbar/HeaderBar';
import LargeCategoryModal from 'components/item/LargeCategoryModal';
import MyPage from 'pages/MyPage';
import BottomTabBar from 'components/ui/navbar/BottomTabBr';
import NonMember from 'pages/NonMember';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        <HeaderBar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />}>
            <Route path="iteminfo" element={<ItemInfo />} />
            <Route path="reviewinfo" element={<ReviewInfo />} />
            <Route path="qandainfo" element={<QandAInfo />} />
            <Route path="orderguide" element={<OrderGuide />} />
            <Route path="similaritem" element={<SimilarItem />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<Review />} />
          <Route path="qna" element={<QnA />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/non-member" element={<NonMember />} />
          <Route path="/wish-list" element={<WishList />} />
        </Routes>
        <BottomTabBar />
      </S.Layout>
    </ThemeProvider>
  );
};

export default App;
