import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const deckKeys = [
  { key: '汉语研讨会', value: 'unpaz-yantaohui-1' },
  { key: 'HSK1', value: 'hsk1' },
  { key: 'HSK2', value: 'hsk2' },
  { key: 'HSK3', value: 'hsk3' },
  { key: 'HSK4', value: 'hsk4' },
  { key: 'HSK5', value: 'hsk5' },
  { key: 'HSK6', value: 'hsk6' },
  { key: 'HSK1（旧）', value: 'old_hsk1' },
  { key: 'HSK2（旧）', value: 'old_hsk2' },
  { key: 'HSK3（旧）', value: 'old_hsk3' },
  { key: 'HSK4（旧）', value: 'old_hsk4' },
  { key: 'HSK5（旧）', value: 'old_hsk5' },
  { key: 'HSK6（旧）', value: 'old_hsk6' },
  { key: 'Labo 1', value: 'labo1' },
  { key: '幼儿中文1', value: 'kids' },
];

ReactDOM.render(
  <React.StrictMode>
    <App deckKeys={deckKeys} />
  </React.StrictMode>,
  document.getElementById('root')
);
