import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pager from './Pager';

ReactDOM.render(
  <React.StrictMode>
      <center>
        <h1>你的中文学了多少？</h1>
        <Pager />
      </center>
  </React.StrictMode>,
  document.getElementById('root')
);
