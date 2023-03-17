import React from 'react';

import style from './style.scss';

const Button = ({ children, variant, className }) => {
    return (
        <button className={`${style.button} ${style[variant] || ''} ${className || ''}`} >
            { children }
        </button>
    );
};

export default Button;
