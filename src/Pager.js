import React from 'react';
import data from './hsk2.json'

import './styles.css'

class Pager extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0, randomize: false }
    this.back = this.back.bind(this)
    this.forward = this.forward.bind(this)
    this.randomize = this.randomize.bind(this)
  }

  render() {
    return (
      <div>
        <div className="pager">
          { data.map( datum => <Page text={datum.character} /> )}
        </div>

        <Button text="&lt;" onClick={ this.back } />
        <Button text="&gt;" onClick={ this.forward } />
        <br /><br />
        <div onClick={ this.randomize }>随机化</div>
      </div>
    );
  }

  randomize() {
    randomize(data)
    this.setState({randomize: true})
  }

  back() {
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1});
    }
  }
  
  forward() {
    if (this.state.index < data.length - 1) {
      this.setState({index: this.state.index + 1});
    }
  }
}

function Button(props) {
  return (<div className="button" onClick={props.onClick}>
    {props.text}
  </div>
  )
}


function Page(props) {
  return (
    <div className="page">
        {verticalTextDiv(props.text)}
    </div>
  );  
}

function verticalTextDiv(text) {
  var children = []
  for (var i = 0, I = text.length; i < I; i++) {
    children.push(text[i]);
    children.push(<br />)
  }
  return (<div className="text">{children}</div>)
}

function randomize(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export default Pager;
