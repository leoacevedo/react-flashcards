import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

class Pager extends React.Component {
    constructor(props) {
      super(props);

      this.onWheel = this.onWheel.bind(this);
      this.wheelEvtCount = 0
    }
    reference(id) {
      return ref => { this[id] = ref }
    }

    scrollToStart() {
      this.scroll.scrollLeft = 0
    }

    componentDidMount() {
      this.scroll.addEventListener('wheel', this.onWheel)
    }

    render() {
      return (
        <div>
          <div 
            className="pager" 
            ref={this.reference('scroll')}
          
        >
            { 
              this.props.data.map(
                elem => this.props.createView(
                  this.props.id(elem),
                  elem
                )
              ) 
            }
          </div>
        </div>
      );
    }

    onWheel(evt) {
      this.wheelEvtCount = (this.wheelEvtCount + 1) % 15;
      if (this.wheelEvtCount !== 0 || Math.abs(evt.deltaX) > 20) {
        evt.preventDefault();
      }      
    }
}  

Pager.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.func.isRequired,
  createView: PropTypes.func.isRequired
}

export default Pager;