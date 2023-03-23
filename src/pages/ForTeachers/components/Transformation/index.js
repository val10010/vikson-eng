import React from 'react';
import style from './style.scss';
import Image from "Components/Image";

const Transformation = () => {

    return(
        <div className={style.container}>
            <div className={style.trasformation}>
                <div className={style.header}>
                    <div className={style.number}>
                        <Image src='../../images/forTeacher/circle.svg' alt="main" className={style.mainsecond}/>
                    </div>
                    <div className={style.title}>Моя трансформація</div>
                </div>
                <div className={style.levels}>
                    <div className={style.timeAgo}>
                        <div className={style.first}>
                            <div className={style.firstRow}>
                                <div className={style.text}>Перший <p className={style.changecolor}>місяць</p> на фрілансі</div>
                                <div className={style.mainPicture}>
                                    <Image src='../../images/forTeacher/mainT.png' alt="main" className={style.main}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.first}>
                            <div className={style.firstRow2}>
                                <div className={style.text}><p className={style.changecolor}>3 місяць</p> навчання на своїх помилках</div>
                            </div>
                        </div>
                        <div className={style.first}>
                            <div className={style.firstRow3}>
                                <div className={style.text}><p className={style.changecolor}>6 місяців.</p> Поява команди</div>
                            </div>
                        </div>
                        <div className={style.first}>
                            <div className={style.firstRow4}>
                                <div className={style.text}><p className={style.changecolor}>Рік </p> після початку шляху</div>
                                <Image src='../../images/forTeacher/secondT.png' alt='' className={style.main}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.haveDone}>
                        <div className={style.second}>
                            <ol className={style.list1}>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>1</div>
                                    <div className={style.texts}><li>Не має клієнтів</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>2</div>
                                    <div className={style.texts}><li>Тільки почала блог</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>3</div>
                                    <div className={style.texts}><li>Все роблю сама.</li></div>
                                </div>
                            </ol>
                        </div>
                        <div className={style.second}>
                            <ol className={style.list2}>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>1</div>
                                    <div className={style.texts}><li>17 активних студентів, та ще 15 у листі очікування</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>2</div>
                                    <div className={style.texts}><li>Сама опановала дошку <p className={style.changecolor}>Miro</p>, так як ніяких навчань в той час не було</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>3</div>
                                    <div className={style.texts}><li>Навчилась офрмлювати блог, та заробила перші гроші на власному навчанні</li></div>
                                </div>
                            </ol>
                        </div>
                        <div className={style.second}>
                            <ol className={style.list3}>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>1</div>
                                    <div className={style.texts}><li>Набрала 3 викладачів парт-тайм, навчила їх якісній роботі онлайн, надала всі метеріали і заповнила графік.</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>2</div>
                                    <div className={style.texts}><li>Почала вкладати в себе і відвідувати курси як технічної сторони викладання так і ведення блогу</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>3</div>
                                    <div className={style.texts}><li>Підвищувала рівень занять.</li></div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>4</div>
                                    <div className={style.texts}><li>Створила інтенсиви по 40-60 хв після яких викладачі одразу створюють якісні і візуально приємні заняття.Вклавши мінімум часу.</li></div>
                                </div>
                            </ol>
                        </div>
                        <div className={style.second}>
                            <ol className={style.list4}>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>1</div>
                                    <div className={style.texts}>
                                        <li>Власна команда з 8 викладачів англійскої, таргетолог, асистент-менеджер, візуал мейкер</li>
                                    </div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>2</div>
                                    <div className={style.texts}>
                                        <li>Через мої руки пройшло більше 20 вчителів та 80 учнів, які нарешті вивчили англійску мову та відкрили усі двери та можливості цього світу.</li>
                                    </div>
                                </div>
                                <div className={style.listRow}>
                                    <div className={style.numbers}>3</div>
                                    <div className={style.texts}>
                                        <li>Створила чітку та ефективну систему навчання по дошці <p className={style.changecolor}>Miro</p> для учнів та вікладачів. І все це лише тому що пішла на ризик та змінила своє життя.  </li>
                                    </div>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
                        <div className={style.panorama}>“Змогла я - зможеш і ти!”</div>
                    <Image src='../../images/forTeacher/panorama.png' alt="main" className={style.mainsecond}/>
            </div>
        </div>
    )

}

export  default Transformation;