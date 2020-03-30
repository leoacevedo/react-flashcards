import React from 'react';
import PropTypes from 'prop-types'

function Dropdown(props) {
    //options = {this.data}
    return (
        <select 
            id={props.id} 
            className={props.className}
            onChange={props.onChange}
        >
            {
                props.options.map( option =>                    
                    <option 
                    key={option['value']}
                    value={option['value']}>
                        {option['key']}
                    </option>
                )
            }
        </select>
    );
}

Dropdown.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Dropdown;