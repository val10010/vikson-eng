import React from 'react';

import style from './style.scss';

const NumberedList = ({ list, className }) => {
    return (
        <ol className={`${style.items} ${className || ''}`}>
            {
                list.map(item => <li key={item} className={style.item}>{ item }</li>)
            }
        </ol>
    );
};

export default NumberedList;
