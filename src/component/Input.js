import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    className,
    type,
    name,
    value,
    onChange
}) => {
    return (
        <input
            className={className}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

Input.propType = {
    list: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;