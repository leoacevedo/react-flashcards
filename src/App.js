import React from 'react';
import {Pager, Flashcard} from './components';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            '水平' : [],
            'HSK2': require('./hsk2.json'),
            'HSK3': require('./hsk3.json'),
        }

        this.state = {
            currentKey: 'HSK3',
            random: false,
            currentSet: this.data['HSK3']
        }

        this.toggleRandom = this.toggleRandom.bind(this);
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
                        {/* <select id="levelChooser">
                            <option value="hsk2">HSK2</option>
                            <option value="hsk3">HSK3</option>
                        </select> */}
                    
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