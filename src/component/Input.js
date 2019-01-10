import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    type,
    name,
    value,
    onChange,
    className
}) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
        />
    )
}

Input.propType = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}

export default Input;