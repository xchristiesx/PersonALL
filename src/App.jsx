import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '/styles/theme.js'
import { HomePage} from "./pages/HomePage/index.jsx";
import {TestPage} from "./pages/TestPage.jsx";


export const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"}  element={<HomePage />} />
                    <Route path="test" element={<TestPage />} />
                    {/*<Route path="dashboard" element={<Dashboard />} />*/}
                    {/*<Route path="*" element={<NoMatch />} />*/}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
