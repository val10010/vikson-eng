import React from 'react';
import { REVIEWS } from './constants';
import Slider from 'Components/Slider';

import style from './style.scss';


const Reviews = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>ВІДГУКИ</h4>
            <Slider reviews={REVIEWS} />
        </section>
    );
};

export default Reviews;
