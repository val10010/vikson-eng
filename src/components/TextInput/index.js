import React from 'react';

import style from './style.scss';

const Input = ({ className, ...props }) => {
    return (
        <input type="text" className={`${style.input} ${className || ''}`} { ...props} />

    );
};

export default Input;
