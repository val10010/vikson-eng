import React from 'react';
import Image from 'Components/Image';

import style from './style.scss';

const StepThree = () => {
    return (
        <div className={style.container}>
            <h5 className={style.title}>Всі заняття та домашнє завдання зберігається в єдиній дошці у нашій системі, доступ до якої усі учні та викладачі мають 24 / 7</h5>
            <Image src="../../../../../images/home/miro.jpg" alt="miro" className={style.image}/>
        </div>
    );
};

export default StepThree;
