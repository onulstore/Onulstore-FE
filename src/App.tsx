import { Routes, Route } from 'react-router-dom';
// STYLED-COMPONENTS
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './components/layout/index';
// PAGES
import Home from './pages/Home';

import Items from 'pages/Items/index';
import ItemDetail from 'pages/ItemDetail';
import Payment from 'pages/Payment';
import Cart from 'pages/Cart';
import QnA from 'pages/QnA';
import Review from 'pages/Review';

import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';

//COMPONENTS
import MyPage from 'pages/MyPage';
import NonMember from 'pages/NonMember';

import PrivateRoutes from 'components/routes/PrivataRoutes';
import FindEmail from 'pages/FindEmail';
import Search from 'pages/Search';
import SearchResults from 'components/search/SearchResults';
import Privacy from 'components/user/Privacy';
import Terms from 'components/user/Terms';
import Today from 'pages/Today';
import WeLike from 'pages/WeLike';
import Magazine from 'pages/WeLike/Magazine';
import OurPicks from 'pages/WeLike/OurPicks';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<Review />} />
          <Route path="qna" element={<QnA />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/find-email" element={<FindEmail />} />
          </Route>
          <Route path="/non-member" element={<NonMember />} />

          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />

          <Route path="/search" element={<Search />}>
            <Route path="results" element={<SearchResults />} />
          </Route>
          <Route path="/today" element={<Today />} />
          <Route path="/we-like" element={<WeLike />}>
            <Route path="magazine" element={<Magazine />} />
            <Route path="our-picks" element={<OurPicks />} />
          </Route>
        </Routes>
      </S.Layout>
    </ThemeProvider>
  );
};

export default App;
