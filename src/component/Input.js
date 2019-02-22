import React from 'react';
import PropTypes from 'prop-types';

function Input(props){
    return (
        <input
            className={props.className}
            type={props.type}
            list={props.list}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

Input.propType = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;

// const Input = ({
//     className,
//     type,
//     name,
//     value,
//     placeholder,
//     onChange
// }) => {
//     return (
//         <input
//             className={className}
//             type={type}
//             name={name}
//             value={value}
//             placeholder={placeholder}
//             onChange={onChange}
//         />
//     )
// }