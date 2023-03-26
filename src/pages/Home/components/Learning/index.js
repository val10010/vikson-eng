import React from 'react';
import { useStickyBox } from "react-sticky-box";
import { LEARNING_ITEMS } from './constants';

import style from './style.scss';

const Learning = () => {
    const stickyRef = useStickyBox();

    return (
        <div className={style.container}>
            <h4 className={style.title}>ПРОЦЕС НАВЧАННЯ</h4>
            <div className={style.wrapper} ref={stickyRef}>
                <ul className={style.items} >
                    <li>Онлайн зустріч з менеджером</li>
                    <li>Знайомство з викладачем</li>
                    <li>Заняття / ДЗ</li>
                    <li>Результат</li>
                </ul>
                <div className={style.content}>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;
