import React from 'react';
import PropTypes from 'prop-types'
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
          { data.map( datum => <Page key={datum.character} text={datum.character} /> )}
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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

function Page(props) {
  return (
    <div className="page">
        {verticalTextDiv(props.text)}
    </div>
  );  
}

Page.propTypes = {
  text: PropTypes.string.isRequired
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
