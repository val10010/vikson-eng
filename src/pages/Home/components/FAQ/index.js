import React from 'react';
import Toggle from 'Components/Toggle';
import { FAQ_LIST } from './constants';

import style from './style.scss';

const FAQ = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>FAQ</h4>
            <div className={style.wrapper}>
                {
                    FAQ_LIST.map(({ title, desc }) => (
                        <Toggle key={title}>
                            <p dangerouslySetInnerHTML={{ __html: title }} />
                            <div className={style.desc} dangerouslySetInnerHTML={{ __html: desc }} />
                        </Toggle>
                    ))
                }
            </div>
        </section>
    );
};

export default FAQ;
