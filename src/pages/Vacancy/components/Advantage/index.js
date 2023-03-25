import React from 'react';
import style from './style.scss';
import Image from "Components/Image";

const Find = () =>{

    return(

        <div className={style.advantage}>
            <div className={style.container}>
                <div className={style.title}>переваги роботи для тічера в нашій команді</div>
                <div className={style.ourGifts}>
                    <div className={style.giftText}>Мы надаємо:</div>
                    <div className={style.list}>
                        <div className={style.element}>
                            <div className={style.play}>
                                <Image src='../../images/Vacancy/play.svg' alt='play'/>
                            </div>
                            <div className={style.elementDescription}>
                                <div className={style.elementTitle}>Не треба шукати студентів.</div>
                                <div className={style.elementText}>
                                    Я сама займаюсь пошуком студентів, перевіряю їх рівень та просто надаю всю
                                    цю інфу і контакт людини. Після чого тічер узгоджує з ними перше заняття.
                                </div>
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.play}>
                                <Image src='../../images/Vacancy/play.svg' alt="hero" className={style.hero}/>
                            </div>
                            <div className={style.elementDescription}>
                                <div className={style.elementTitle}>Комфортні умови праці</div>
                                <div className={style.elementText}>
                                    Я даю змогу створювати свої спікінг клаби, працювати так,
                                    як комфортно викладачу та допомогаю в реалізації любих ідей.
                                </div>
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.play}>
                                <Image src='../../images/Vacancy/play.svg' alt='play'/>
                            </div>
                            <div className={style.elementDescription}>
                                <div className={style.elementTitle}>Навчаємо тічерів </div>
                                <div className={style.elementText}>
                                    Всю інформацію яку я продаю іншим тічерам, своїм з команди я надаю просто
                                    так. Час від часу роблю їм онлайн зустріч з носієм мови(раз на місяць зазвичай)
                                </div>
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.play}>
                                <Image src='../../images/Vacancy/play.svg' alt='play'/>
                            </div>
                            <div className={style.elementDescription}>
                                <div className={style.elementTitle}>Заробітня плата раз на тиждень</div>
                                <div className={style.elementText}>
                                    Всі студенти підписують договір і платять заздалегідь перед уроком, я це
                                    контролюю. Тому тічер не боїться витратити час дарма чи бути обманутим.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Find;