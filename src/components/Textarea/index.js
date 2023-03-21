import React from 'react';

import style from './style.scss';

const Textarea = ({ className, ...props }) => {
    return (
        <textarea className={`${style.textarea} ${className}`} { ...props} >
        </textarea>
    );
};

export default Textarea;
