import { Routes, Route } from 'react-router-dom';
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
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
//COMPONENTS
import HeaderBar from 'components/ui/navbar/HeaderBar';
import LargeCategoryModal from 'components/item/LargeCategoryModal';
const App = () => {
  const { isShowLargeCategoryModal } = useItemSlice();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        {isShowLargeCategoryModal && <LargeCategoryModal />}
        <HeaderBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </S.Layout>
    </ThemeProvider>
  );
};

export default App;
