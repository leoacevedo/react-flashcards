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
        this.data = {
            'hsk2': require('./hsk2.json'),
            'hsk3': require('./hsk3.json'),
        }

        this.state = {
            currentKey: 'hsk2',
            random: false,
            currentSet: this.data['hsk2']
        }

        this.toggleRandom = this.toggleRandom.bind(this);
        this.onDeckChosen = this.onDeckChosen.bind(this);
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
                        data = {this.state.currentSet}
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
        var newSet = this.data[newKey]
        var random = this.state.random;

        if (random) {
            newSet = randomize(newSet)
        }

        this.setState({
            currentKey: newKey,
            currentSet: newSet
        })
    }

    toggleRandom() {
        var newRandom = !this.state.random;
        var newSet = this.data[this.state.currentKey]
        
        if (newRandom) {
            newSet = randomize(newSet)
        }
        
        this.setState({
            random: newRandom,
            currentSet: newSet
        })
    }
}

function randomize(set) {
    var result = [];
    var length = set.length;
    var range = createRange(0, length);

    while (range.length > 0) {
        var index = randomInt(range.length)
        result.push(set[range[index]]);
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