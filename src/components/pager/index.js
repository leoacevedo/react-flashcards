import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

class Pager extends React.Component {
    render() {
      return (
        <div>
          <div className="pager">
            { 
              this.props.data.map(
                datum => this.props.createView(
                  this.props.id(datum),
                  datum
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