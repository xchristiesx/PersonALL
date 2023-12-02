import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '/styles/theme.js';
import { HomePage } from './pages/HomePage/index.jsx';
import { TestPage } from './pages/Test.jsx';
import { AboutUs } from './pages/Onas/index.jsx';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="onas" element={<AboutUs />} />
          {/*<Route path="dashboard" element={<Dashboard />} />*/}
          {/*<Route path="*" element={<NoMatch />} />*/}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
