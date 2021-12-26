import React from 'react';
import ReactDOM from 'react-dom';

import {HomePageContainer} from './pages/HomePage/containers/HomePageContainer';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    < HomePageContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

