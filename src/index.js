import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// import {GlobalStyles} from './styles/GlobalStyles'


ReactDOM.render(
  <React.StrictMode>
    {/* <GlobalStyles> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </GlobalStyles> */}
  </React.StrictMode>,
  document.getElementById('root')
);

