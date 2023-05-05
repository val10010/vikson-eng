import React from 'react';

import style from './style.scss';

const Card = ({ className = '', title, workType, experience, onClick}) => {
    return (
        <div className={`${style.container} ${className}`}>
            <h4 className={style.title}>{ title }</h4>
            <p className={style.workType}>
                { workType }
            </p>
            <div className={style.cardBottom}>
                <p className={style.experience}>
                    { experience }
                </p>
                <button
                    className={style.button}
                    onClick={() => onClick({ vacancyName: title })}
                >
                    відгукнутись
                </button>
            </div>
        </div>
    );
};

export default Card;
