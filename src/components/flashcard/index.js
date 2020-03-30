import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

function Flashcard(props) {
    return (
      <div className="flashcard">
          {verticalTextDiv(props.text)}
      </div>
    );  
  }
  
  Flashcard.propTypes = {
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

  export default Flashcard;