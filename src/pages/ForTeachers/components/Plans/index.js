import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import { PRODUCTS_NAME } from './constants';
import React, { useCallback, useContext } from 'react';
import TariffPlanTeachers from 'Components/TariffPlanTeachers';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Plans = () => {
    const dispatch = useDispatch();
    const { isMobile } = useContext(DeviceContext);

    const handleBtnClick = useCallback((id) => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'OrderForm',
                props: {
                    fromPage: 'зі сторінки вчителів',
                    productName: PRODUCTS_NAME[id],
                    className: style.formInPopup,
                    btnonclick: {
                        actionName: 'showPopup',
                        props: {
                            contents: [{
                                name: 'Success'
                            }]
                        }
                    }
                }
            }]
        }))
    }, []);

    return (
        <>
            <div className={style.container}>
                <h4 className={style.title}>ІНТЕНСИВИ ПО <span className={style.highlightedText}>MIRO</span></h4>
                <div className={style.descBlock}>
                    <p className={style.descFirst}>
                        Сьогодні все рухається дуже швидко.
                        Тому, щоб бути реальним експертом у своїй області - треба використовувати
                        сучасні інструменти. Навчись будувати своє навчання у <span className={style.highlightedText}>Miro</span> - сучасній технологічній
                        онлайн дошці. Стань профі викладачем.
                    </p>
                    {
                        !isMobile && <p className={style.descSecond}>
                            Маєте змогу дивитись і одночасно реалізовувати дії на дошці.
                            <span className={style.highlightedText}>(для вчителів будь-якої іноземної мови)</span>

                        </p>
                    }
                </div>
            </div>
            <div id="plans" className={style.wrapper}>
                <TariffPlanTeachers
                    id='0'
                    number='#1'
                    price='600 грн.'
                    className={style.plan}
                    onClick={handleBtnClick}
                >
                    <h4 className={style.planTitle}>Знайомство з <span className={style.highlightedText}>Miro</span></h4>
                    <div className={style.planDesc}>
                        <p className={style.highlightedText}>Новачки, невпевнені користувачі</p>
                        <p className={style.subDesc}>Тривалість: 40 хвилин розбиті на лекції</p>
                        <p>
                            Включає в себе всі інструменти дошки.
                            Наглядна інструкція як перенести урок з підручника на дошку міро,
                            з гарним візуалом і додавання автентичних матеріалів.
                        </p>
                    </div>
                </TariffPlanTeachers>
                <TariffPlanTeachers
                    id='1'
                    number='#2'
                    price='600 грн.'
                    className={style.plan}
                    onClick={handleBtnClick}
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
                            з гарним візуалом і додавання автентичних матеріалів.
                        </p>
                    </div>
                </TariffPlanTeachers>
            </div>
        </>
    );
};

export default Plans;
