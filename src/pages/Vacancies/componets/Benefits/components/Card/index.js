import React from 'react';

import style from './style.scss';

const Card = ({ className = '', title, desc }) => {
    return (
        <div className={`${style.container} ${className}`}>
            <h4 className={style.title}>{ title }</h4>
            <p className={style.desc}>{ desc }</p>
        </div>
    );
};

export default Card;
