import React from 'react';

const Button = (props) => {

    const { children, className, disabled, handleOnClick, styles, } = props;

    return (
        <button className={className} style={styles} disabled={disabled} onClick={handleOnClick}>{children}</button>
    );
};

export default Button;
