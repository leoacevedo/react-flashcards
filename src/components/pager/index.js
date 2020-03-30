import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

class Pager extends React.Component {
    reference(id) {
      return ref => { this[id] = ref }
    }

    scrollToStart() {
      this.scroll.scrollLeft = 0
    }

    render() {
      return (
        <div>
          <div className="pager" ref={this.reference('scroll')}>
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
}  

Pager.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.func.isRequired,
  createView: PropTypes.func.isRequired
}

export default Pager;