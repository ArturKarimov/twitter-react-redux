import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from "./theme";
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store/store";


ReactDOM.render(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>,
  document.getElementById('root')
);