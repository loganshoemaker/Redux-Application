import React from 'react';

const Button = (props) => {

    const { children, disabled, handleOnClick, } = props;

    return (
        <button disabled={disabled} onClick={handleOnClick}>{children}</button>
    );
};

export default Button;
