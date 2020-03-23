import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pager from './Pager';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
	  <center>
	  	<h1>你的中文学了多少？</h1>
	    <Pager />
	  </center>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
