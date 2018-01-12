import React from 'react';

const Button = (props) => {

    const { children, handleOnClick, } = props;

    return (
        <button onClick={handleOnClick}>{children}</button>
    );
};

export default Button;
