import { Routes, Route } from 'react-router-dom';
// STYLED-COMPONENTS
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './components/layout/index';
// PAGES
import Home from './pages/Home';
import Items from './pages/Items';
import ItemDetail from 'pages/ItemDetail';
import SignUP from 'pages/SignUp';
//COMPONENTS
import HeaderBar from 'components/ui/navbar/HeaderBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        <HeaderBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/signup" element={<SignUP />} />
        </Routes>
      </S.Layout>
    </ThemeProvider>
  );
};

export default App;
