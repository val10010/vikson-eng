import React from 'react';

import style from './style.scss';

const StepFirst = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>
                Менеджер опитує вас по графіку, поточному рівню і загальних питаннях.
                Після цього шукає викладача саме під ваші потреби.
                Викладач звʼязується зі студентом протягом 24 годин.
            </div>
        </div>
    );
};

export default StepFirst;
