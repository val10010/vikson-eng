import React from 'react';
import style from './style.scss';

const Acquaintance = () =>{
    return(
        <section className={style.blunksbg}>
            <div className={style.container}>
                <div className={style.blunksRow}>
                    <div className={style.cards}>
                        <div className={style.number}>#1</div>
                        <div className={style.title}>Знайомство з <p className={style.changecolor}>Miro</p></div>
                        <div className={style.level}>
                            <p className={style.changecolor}>Новачки, невпевнені користувачі</p>
                            <div>Тривалість: 40 хвилин розбиті на лекції</div>
                        </div>
                        <div className={style.description}>
                            Включає в себе всі інструменти дошки. Наглядна інструкція як перенести урок з
                            підручника на дошку міро,з гарним візеалом і додавання аутентичних матеріалів.
                        </div>
                        <div className={style.pricerow}>
                            <div className={style.price}>ціна: <p className={style.weight}>600 грн</p> </div>
                            <div className={style.button}>ПРИДБАТИ</div>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.number}>#2</div>
                        <div className={style.title}><p className={style.changecolor}>Miro.</p> Створювання ігор і тематичних занять</div>
                        <div className={style.level}>
                            <p className={style.changecolor}>впевнені користувачі</p>
                            <div>Тривалість: 60 хвилин розбиті на лекції</div>
                        </div>
                        <div className={style.description}>
                            Включає в себе всі інструменти дошки. Наглядна інструкція як перенести урок з
                            підручника на дошку міро,з гарним візеалом і додавання аутентичних матеріалів.
                        </div>
                        <div className={style.pricerow}>
                            <div className={style.price}>ціна: <p className={style.weight}>600 грн</p></div>
                            <div className={style.button}>ПРИДБАТИ</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Acquaintance;