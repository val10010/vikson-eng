import React from 'react';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';

const StepFirst = () => {
    const list = [
        'Зустріч проходить в Zoom',
        'Тривалість 20 хв.',
        'Перевірять рівень англійської',
        'Ознайомлять з методикою викладання, покажуть всі потрібні інструменти',
        'Отримаєте відповіді на всі питання'
    ];

    return (
        <div className={style.container}>
            <h5 className={style.title}>Без повного аналізу рівня учня та його цілей – неможливо побачити весь його потенціал</h5>
            <NumberedList list={list} />
        </div>
    );
};

export default StepFirst;
