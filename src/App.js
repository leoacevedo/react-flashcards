import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from './actionCreators'
import {Dropdown, Flashcard, Pager} from './components';
import {randomize} from './utils'
import './index.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleRandom = this.toggleRandom.bind(this);
        this.onDeckChosen = this.onDeckChosen.bind(this);
        this.deckFor = this.deckFor.bind(this);        
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
                        data = {this.props.currentDeck}
                        id = { elem => elem.character }
                        createView = { (id, elem) => <Flashcard key={id} text={elem.character} /> }
                    />

                    <div id="bottomBar">
                        <Dropdown 
                            id = "levelChooser" 
                            options = {this.props.deckKeys}
                            onChange= {this.onDeckChosen}
                        />
                    
                        <input id="randomizeBtn" 
                            type="button" 
                            value={ this.props.random? "排序" : "随机化" }
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

App.propTypes = {
    currentDeck: PropTypes.array.isRequired,
    random: PropTypes.bool.isRequired,
    deckKeys: PropTypes.array.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    console.log("state")
    console.log(state)
    console.log("ownProps")
    console.log(ownProps)
    return state;
}

const mapDispatchToProps = {
  // ... normally is an object full of action creators
}

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)
// and that function returns the connected, wrapper component:
const ConnectedApp = connectToStore(App)

export default ConnectedApp;
