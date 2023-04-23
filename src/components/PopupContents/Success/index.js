import React from 'react';

import style from './style.scss';

export const Success = ({ key }) => {
    return (
        <div key={key} className={style.container}>
            <p className={style.infoTitle}>Дякую, ваші дані успішно відправлені!</p>
            <p className={style.infoSubtitle}>З вами зв'яжуться найближчим часом.</p>
        </div>
    );
};
