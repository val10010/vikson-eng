import React from 'react';

import { CARDS_LIST } from './constants';
import Card from './components/Card';

import style from './style.scss';

const Benefits = () => {
    return (
        <section className={style.container}>
            <h2 className={style.title}>переваги роботи для тічера в нашій команді</h2>
            <div className={style.content}>
                {CARDS_LIST.map(card => (
                    <Card key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Benefits;
