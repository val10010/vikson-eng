import React from 'react';
import Image from 'Components/Image';

import style from './style.scss';

const LifeStory = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className={style.title}>Я НЕ ЗАВЖДИ БУЛА ЕКСПЕРТОМ</h3>
                <p className={style.desc}>
                    Ще з дитинства мене сильно тягнуло до англійської мови та навчання.
                    Тому, як тільки була можливість - пішла на роботу в онлайн школу.
                    Але після року роботи я зрозуміла, що там неможливо розвиватись та реалізовувати свої ідеї.
                    Я вирішила піти у фріланс, почала з 0 без особливого досвіду, почала вести блог в інстаграмі та тік тоці.
                    Саме так почався мій тернистий і складний шлях, ціль якого була - стати експертом у сфері навчання іноземних мов.
                </p>
            </div>
            <Image className={style.img} src="../../../../images/forTeacher/life-story_hero.jpg"/>
        </div>
    );
};

export default LifeStory;
