import React from 'react';

const Input = (props) => {
    const { handleOnChange, placeholder, type } = props;
    return (
        <input placeholder={placeholder}
            type={type}
            onChange={(e) => handleOnChange(e.target.value)}
        />
    )
}

export default Input;
