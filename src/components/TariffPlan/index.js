import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const TariffPlan = ({
        id,
        desc,
        title,
        number,
        onClick,
        subtitle,
        modifier = '',
        className = ''
    }) => {

    return (
        <div className={`${style.container} ${className} ${style[modifier]}`}>
            <p className={style.number}>
                { number }
            </p>
            <h4 className={style.title}>
                { title }
            </h4>
            <h5 className={style.subtitle}>
                { subtitle }
            </h5>
            <p className={style.desc}>
                { desc }
            </p>
            <Button
                onClick={() => onClick(id)}
                className={style.price}
            >
                ціни
            </Button>
        </div>
    );
};

export default TariffPlan;
