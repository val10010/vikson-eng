import React from 'react';

import style from './style.scss';

const StepFourth = () => {
    return (
        <div className={style.container}>
            <h5 className={style.title}>Ми за результат.</h5>
            <div className={style.item}>
                Ми ставимо акцент на розмовну частину, так як людина бачить свій прогрес тільки тоді,
                коли вчиться говорити. Саме тому результат можна спостерігати кожен урок, під час говоріння,
                а також прослуховування мови носіїв, і власне розумінню його
            </div>
            <div className={style.item}>
                Учень навчається у форматі гри, що полегшує цей процес.
                Домашні завдання виконуються на дошці в будь-який зручний час.
                Учень може на своїй дошці писати, малювати, робити нотатки, прикріплювати картинки або стікери,
                повертатись і змінювати свої відповіді
            </div>
        </div>
    );
};

export default StepFourth;
