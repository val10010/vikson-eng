import React from 'react';

import style from './style.scss';

const Button = ({ children, variant, className, ...props }) => {
    return (
        <button
            className={`${style.button} ${style[variant] || ''} ${className || ''} ${props.disabled ? style.disabled : ''}`}
            { ...props}
        >
            { children }
        </button>
    );
};

export default Button;
