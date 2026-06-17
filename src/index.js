import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const deckKeys = [
  { key: '汉语研讨会', value: 'unpaz-yantaohui-1' },
  { key: 'HSK1', value: 'hsk1' },
];

ReactDOM.render(
  <React.StrictMode>
    <App deckKeys={deckKeys} />
  </React.StrictMode>,
  document.getElementById('root')
);
