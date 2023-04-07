import React from 'react';
import StickyBox from 'Components/StickyBox';

import { ITEMS } from './constants';
import StepFirst from './components/StepFirst';
import StepThird from './components/StepThird';
import StepSecond from './components/StepSecond';
import StepFourth from './components/StepFourth';

import style from './style.scss';

const Learning = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>ПРОЦЕС НАВЧАННЯ</h4>
            <StickyBox menuItems={ITEMS}>
                <div>
                    <StepFirst/>
                    <StepSecond/>
                    <StepThird/>
                    <StepFourth/>
                </div>
            </StickyBox>
        </section>
    );
};

export default Learning;
