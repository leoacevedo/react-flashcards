import React from 'react';
import ReactDOM from 'react-dom';
import {Pager, Flashcard} from './components';

import './index.css';

var data = require('./hsk2.json')
console.log(data);
ReactDOM.render(
  <React.StrictMode>
      <center>
        <div id="root">
          <h1>考考汉子！</h1>
          <Pager 
            data = {data}
            id = { datum => datum.character }
            createView = { (id, datum) => <Flashcard key={id} text={datum.character} /> }
          />

          <div id="bottomBar">
            <select id="levelChooser">
              <option value="hsk2">HSK2</option>
              <option value="hsk3">HSK3</option>
            </select>
         
            <input id="randomizeBtn" 
              type="button" 
              value="随机化"
              onClick={ () => alert("click") }
            />
          </div>
        </div>
      </center>
  </React.StrictMode>,
  document.getElementById('root')
);
