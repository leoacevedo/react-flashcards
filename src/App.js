import React from 'react';
import {Dropdown, Flashcard, Pager} from './components';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.options = [
            { key: 'HSK2', value: 'hsk2' },
            { key: 'HSK3', value:  'hsk3' }
        ]

        this.state = {
            currentKey: 'hsk2',
            random: false,
            currentDeck: require('./hsk2.json')
        }

        this.toggleRandom = this.toggleRandom.bind(this);
        this.onDeckChosen = this.onDeckChosen.bind(this);
        this.deckFor = this.deckFor.bind(this);        
    }

    reference(id) {
        return ref => { this[id] = ref }
    }
      
    componentDidUpdate() {
        this.pager.scrollToStart()
    }

    render() {
        return (
            <center>
                <div id="root">
                    <h1>考考汉子！</h1>
                    <Pager 
                        ref = {this.reference('pager')}
                        data = {this.state.currentDeck}
                        id = { elem => elem.character }
                        createView = { (id, elem) => <Flashcard key={id} text={elem.character} /> }
                    />

                    <div id="bottomBar">
                        <Dropdown 
                            id = "levelChooser" 
                            options = {this.options}
                            onChange= {this.onDeckChosen}
                        />
                    
                        <input id="randomizeBtn" 
                            type="button" 
                            value={ this.state.random? "排序" : "随机化" }
                            onClick={ this.toggleRandom }
                        />
                    </div>
                </div>
            </center>
      );
    }

    onDeckChosen(evt) {
        var newIndex = evt.target.selectedIndex;
        var newKey = this.options[newIndex].value
        var newDeck = this.deckFor(newKey)
        var random = this.state.random;

        if (random) {
            newDeck = randomize(newDeck)
        }

        this.setState({
            currentKey: newKey,
            currentDeck: newDeck
        })
    }

    toggleRandom() {
        var newRandom = !this.state.random;
        var deck = this.state.currentDeck
        
        if (newRandom) {
            deck = randomize(deck)
        } else {
            deck = this.deckFor(this.state.currentKey)
        }
        
        this.setState({
            random: newRandom,
            currentDeck: deck
        })
    }

    deckFor(key) {
        return require(`./${key}.json`)
    }
}

function randomize(deck) {
    var result = [];
    var length = deck.length;
    var range = createRange(0, length);

    while (range.length > 0) {
        var index = randomInt(range.length)
        result.push(deck[range[index]]);
        range.splice(index, 1)
    }
    return result;
}

function createRange(min, max) {
    var result = [];
    for(var i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}

function randomInt(max) {
	return Math.floor((max) * Math.random());
}

export default App;