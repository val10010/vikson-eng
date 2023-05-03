import React, { useContext } from 'react';
import TariffPlanTeacher from 'Components/TariffPlanTeacher';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Plans = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <>
            <div className={style.container}>
                <h4 className={style.title}>ІНТЕНСИВИ ПО <span className={style.highlightedText}>MIRO</span></h4>
                <div className={style.descBlock}>
                    <p className={style.descFirst}>
                        Сьогодні все дуже швидко рухається.
                        Тому щоб бути реальним експертом у своїй області - треба використовувати сучасні інструменти.
                        Навчися будувати своє навчання у <span className={style.highlightedText}>Miro</span> - сучасній технологічній онлайн дошці. Стань профі викладачем.
                    </p>
                    {
                        !isMobile && <p className={style.descSecond}>
                            Маєте змогу дивитись і одночасно реалізовувати дії на дошці.
                            <span className={style.highlightedText}>(для вчителів будь-якої іноземної мови)</span>
                        </p>
                    }
                </div>
            </div>
            <div id="plan" className={style.wrapper}>
                <TariffPlanTeacher
                    id='0'
                    number='#1'
                    price='600 грн.'
                    className={style.plan}
                >
                    <h4 className={style.planTitle}>Знайомство з <span className={style.highlightedText}>Miro</span></h4>
                    <div className={style.planDesc}>
                        <p className={style.highlightedText}>Новачки, невпевнені користувачі</p>
                        <p className={style.subDesc}>Тривалість: 40 хвилин розбиті на лекції</p>
                        <p>
                            Включає в себе всі інструменти дошки.
                            Наглядна інструкція як перенести урок з підручника на дошку міро,
                            з гарним візеалом і додавання аутентичних матеріалів.
                        </p>
                    </div>
                </TariffPlanTeacher>
                <TariffPlanTeacher
                    id='1'
                    number='#2'
                    price='600 грн.'
                    className={style.plan}
                >
                    <h4 className={style.planTitle}>
                        <span className={style.highlightedText}>Miro.</span> Створювання ігор і тематичних занять
                    </h4>
                    <div className={style.planDesc}>
                        <p className={style.highlightedText}>Впевнені користувачі</p>
                        <p className={style.subDesc}>Тривалість: 60 хвилин розбиті на лекції</p>
                        <p>
                            Включає в себе всі інструменти дошки.
                            Наглядна інструкція як перенести урок з підручника на дошку міро,
                            з гарним візеалом і додавання аутентичних матеріалів.
                        </p>
                    </div>
                </TariffPlanTeacher>
            </div>
        </>
    );
};

export default Plans;
