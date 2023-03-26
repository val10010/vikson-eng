import React from 'react';
import { POSTS } from './constants';
import Image from 'Components/Image';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Instagram = () => {
    return (
        <div className={style.container}>
            <Link to='https://instagram.com/vikson.eng' className={style.title} target="_blank">@vikson.eng</Link>
            <p className={style.subtitle}>підписуйся на мене в instagram</p>
            <div className={style.wrapper}>
                {
                    POSTS.map(item => (
                        <Link to={item.link} target="_blank">
                            <Image src={item.imagePath} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Instagram;
