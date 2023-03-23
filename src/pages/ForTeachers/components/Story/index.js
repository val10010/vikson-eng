import React from 'react';
import style from './style.scss';
import Image from "Components/Image";

const Story = () =>{

    return(
        <div className={style.teacherstory}>
            <div className={style.container}>
                <div className={style.storyRow}>
                    <div className={style.story}>
                        <div className={style.title}>Я НЕ ЗАВЖДИ БУЛА ЕКСПЕРТОМ</div>
                        <div className={style.description}>
                            <p className={style.letter}>Ще з дитинства мене сильно тягнуло до англійської мови та навчання. Тому як тільки я  була можливість - пішла
                                на роботу в онлайн школу. Але після року роботи я зрозуміла, що там неможливо розвиватись і реалізовувати свої
                                ідеї.</p>
                             Я вирішила піти у фріланс, почала з 0 без особливого досвіду, почала вести блог в інстаграмі та тік тоці.
                            Саме так почався мій тернистий і складний шлях, ціль якого була - стати експертом у сфері навчання іноземних мов.
                        </div>
                    </div>
                    <div className={style.picture}>
                        <Image src='../../images/forTeacher/story.png' alt="main" className={style.mainsecond}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Story;