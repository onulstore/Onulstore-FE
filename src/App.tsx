import { useEffect } from 'react';
import styled from 'styled-components';
//react-router
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import StyleTest from './components/StyleTest';
import ApiTest from './components/ApiTest';
const App = () => {
  return (
    <StyledApp>
      {/* <StyleTest/> */}
      <ApiTest />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div``;

export default App;
