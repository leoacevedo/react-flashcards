import React, {useState, useEffect, useRef} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import PropTypes from 'prop-types'
import {Dropdown, Flashcard } from './components';
import {randomize} from './utils'
import './index.css';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

function App({deckKeys}) {
  const [currentDeck, setCurrentDeck] = useState(deckFor(deckKeys[0]['value']));
  const [random, setRandom] = useState();
  const [currentKey, setCurrentKey] = useState();
  const pagerRef = useRef(null);

  useEffect(() => {
    //pagerRef.current. tart()
  });

  const createView = ({ key }) => {
    var text;
    if (key < 0) {
      text = ''
    } else {
      text = currentDeck[key].character
    }
    return <Flashcard key={key} text={`${text}`} /> 
  }
  
  return (
      <center>
          <div id="root">
              <h1>考考汉字！</h1>
                <VirtualizeSwipeableViews
                    id="pager"
                    ref={pagerRef}
                    enableMouseEvents = { true }
                    resistance = { true }
                    slideRenderer = { createView }
                    overscanSlideAfter = {1}
                    overscanSlideBefore = {1}
                    slideCount = { currentDeck.length }
                />
              <div id="bottomBar">
                  <Dropdown
                      id = "levelChooser"
                      options = {deckKeys}
                      onChange= {(evt) => onDeckChosen({evt, options: deckKeys, random, setCurrentKey, setCurrentDeck})}
                  />

                  <input id="randomizeBtn"
                      type="button"
                      value={ random? "排序" : "随机化" }
                      onClick={ () => toggleRandom({random, setRandom, currentKey, currentDeck, setCurrentDeck}) }
                  />
              </div>
          </div>
      </center>
    );
}

function onDeckChosen({evt, options, random, setCurrentKey, setCurrentDeck}) {
  var newIndex = evt.target.selectedIndex;
  var newKey = options[newIndex].value
  var newDeck = deckFor(newKey)

  if (random) {
      newDeck = randomize(newDeck)
  }

  setCurrentKey(newKey);
  setCurrentDeck(newDeck);
}

function toggleRandom({random, setRandom, currentKey, currentDeck, setCurrentDeck}) {
  var newRandom = !random;
  var deck = currentDeck

  if (newRandom) {
      deck = randomize(deck)
  } else {
      deck = deckFor(currentKey)
  }

  setRandom(newRandom)
  setCurrentDeck(deck);
}

function deckFor(key) {
  return require(`./decks/${key}.json`)
}

App.propTypes = {
  deckKeys: PropTypes.array.isRequired,
}

export default App;
