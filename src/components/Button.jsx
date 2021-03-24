import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    // const onClick = (e) => {
    //     console.log(e);
    // }

    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor: color }}> 
            {text}
         </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick : PropTypes.func,
}

export default Button