import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion"
import { theme } from '/styles/theme.js';
import { HomePage } from './pages/HomePage.jsx';
import { TestPage } from './pages/Test.jsx';
import { AboutUs } from './pages/AboutUs.jsx';
import { Terms } from './pages/Terms.jsx';
import Conditions from './pages/Conditions.jsx';
import { ResultPage } from './pages/ResultPage.jsx';
import { Contacts } from './pages/Contacts.jsx';
import {ErrorPage} from "./pages/ErrorPage.jsx";




export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="conditions" element={<Conditions />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
