import React from 'react';
import { REVIEWS } from './constants';
import Slider from 'Components/Slider';

import style from './style.scss';


const Reviews = () => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>ВІДГУКИ</h4>
            <Slider reviews={REVIEWS} />
        </div>
    );
};

export default Reviews;
