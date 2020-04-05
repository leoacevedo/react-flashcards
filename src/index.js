import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Actions from './actionCreators'
import App from './App.js'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(
  Actions.setDeckKeys([
    { key: 'HSK1', value: 'hsk1' },
    { key: 'HSK2', value: 'hsk2' },
    { key: 'HSK3', value: 'hsk3' },
    { key: 'HSK4', value: 'hsk4' },
    { key: 'HSK5', value: 'hsk5' },
    { key: 'HSK6', value: 'hsk6' },
    { key: 'Labo 1', value: 'labo1' },
    { key: 'Labo 2', value: 'labo2' },
    { key: 'Labo 3', value: 'labo3' },
    { key: 'Labo 4', value: 'labo4' },
    { key: 'Labo 5', value: 'labo5' },
    { key: 'Labo 6', value: 'labo6' },
  ])
);