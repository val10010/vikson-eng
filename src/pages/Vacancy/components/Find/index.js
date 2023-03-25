import React from 'react';
import style from './style.scss';
import Image from "Components/Image";

const Advantage = () =>{

    return(

        <div className={style.find}>
            <div className={style.container}>
                <div className={style.title}>ЗАРАЗ ШУКАЄМО</div>
                <div className={style.languages}>
                    <div className={style.langElement}>
                        <div className={style.above}>
                            <div className={style.langTitle}>Вчитель німецької мови</div>
                            <Image className={style.icon} src='../../images/Vacancy/earth.svg' alt='earth' />
                        </div>
                        <div className={style.bottom}>
                            <div className={style.left}>
                                <div className={style.leftL}>
                                    <div className={style.leftA}>віддалено</div>
                                    <div className={style.leftB}>переважно з досвідом</div>
                                </div>
                            </div>
                            <div className={style.right}>
                                <div className={style.rightT}>подробиці</div>
                                <Image className={style.arrow} src='../../images/Vacancy/arrow.svg' alt='arrow'/>
                            </div>
                        </div>
                    </div>
                    <div className={style.langElement}>
                        <div className={style.above}>
                            <div className={style.langTitle}>Вчитель німецької мови</div>
                            <Image className={style.icon} src='../../images/Vacancy/earth.svg' alt='earth' />
                        </div>
                        <div className={style.bottom}>
                            <div className={style.left}>
                                <div className={style.leftL}>
                                    <div className={style.leftA}>віддалено</div>
                                    <div className={style.leftB}>переважно з досвідом</div>
                                </div>
                            </div>
                            <div className={style.right}>
                                <div className={style.rightT}>подробиці</div>
                                <Image className={style.arrow} src='../../images/Vacancy/arrow.svg' alt='arrow'/>
                            </div>
                        </div>
                    </div>
                    <div className={style.langElement}>
                        <div className={style.above}>
                            <div className={style.langTitle}>Вчитель німецької мови</div>
                            <Image className={style.icon} src='../../images/Vacancy/earth.svg' alt='earth' />
                        </div>
                        <div className={style.bottom}>
                            <div className={style.left}>
                                <div className={style.leftL}>
                                    <div className={style.leftA}>віддалено</div>
                                    <div className={style.leftB}>досвід від 1 року</div>
                                </div>
                            </div>
                            <div className={style.right}>
                                <div className={style.rightT}>подробиці</div>
                                <Image className={style.arrow} src='../../images/Vacancy/arrow.svg' alt='arrow'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default Advantage;