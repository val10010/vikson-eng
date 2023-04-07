import React from 'react';
import { POSTS } from './constants';
import Image from 'Components/Image';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Instagram = () => {
    return (
        <section className={style.container}>
            <Link to='https://instagram.com/vikson.eng' className={style.title} target="_blank">@vikson.eng</Link>
            <p className={style.subtitle}>підписуйся на мене в instagram</p>
            <div className={style.wrapper}>
                {
                    POSTS.map(item => (
                        <Link key={item.link} to={item.link} target="_blank">
                            <Image  src={item.imagePath}  alt={item.link} className={style.post} />
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};

export default Instagram;
