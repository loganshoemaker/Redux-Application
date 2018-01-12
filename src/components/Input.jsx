import React from 'react';

const Input = (props) => {
    const { handleOnChange, handleOnBlur, placeholder, type } = props;
    return (
        <input placeholder={placeholder}
            type={type}
            onChange={(e) => handleOnChange(e.target.value)}
            onBlur={(e) => handleOnBlur(e.target.value)} />
    )
}

export default Input;
