import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const deckKeys = [
  { key: 'HSK1', value: 'hsk1' },
  { key: 'HSK2', value: 'hsk2' },
  { key: 'HSK3', value: 'hsk3' },
  { key: 'HSK4', value: 'hsk4' },
  { key: 'HSK5', value: 'hsk5' },
  { key: 'HSK6', value: 'hsk6' },
  { key: 'Labo 1', value: 'labo1' },
  { key: '幼儿中文1', value: 'kids' },
];

ReactDOM.render(
  <React.StrictMode>
    <App deckKeys={deckKeys} />
  </React.StrictMode>,
  document.getElementById('root')
);
