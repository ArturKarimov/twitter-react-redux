import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from "./theme";
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </ThemeProvider>,
  document.getElementById('root')
);