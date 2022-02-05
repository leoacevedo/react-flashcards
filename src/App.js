import React from 'react';
import {Dropdown, Flashcard, Pager} from './components';
import {randomize} from './utils'
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleRandom = this.toggleRandom.bind(this);
        this.onDeckChosen = this.onDeckChosen.bind(this);
        this.deckFor = this.deckFor.bind(this);        

        this.options = [
            { key: 'HSK1', value: 'hsk1' },
            { key: 'HSK2', value: 'hsk2' },
            { key: 'HSK3', value: 'hsk3' },
            { key: 'HSK4', value: 'hsk4' },
            { key: 'HSK5', value: 'hsk5' },
            { key: 'HSK6', value: 'hsk6' },
            { key: 'Labo 1', value: 'labo1' },
            { key: 'Labo 2', value: 'labo2' },
            { key: 'Labo 3', value: 'labo3' },
        ]

        var currentKey = this.options[0].value;
        this.state = {
            currentKey: currentKey,
            random: false,
            currentDeck: this.deckFor(currentKey)
        }
    }

    reference(id) {
        return ref => { this[id] = ref }
    }
      
    componentDidUpdate() {
        this.pager.scrollToStart()
        console.log(this.props)
    }

    render() {
        return (
            <center>
                <div id="root">
                    <h1>考考汉字！</h1>
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
        return require(`./decks/${key}.json`)
    }
}

export default App;
