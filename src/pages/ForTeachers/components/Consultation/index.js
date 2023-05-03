import Popup from 'Components/Popup';
import Button from 'Components/Button';
import React, { useContext, useState } from 'react';
import ReservationForm from 'Components/ReservationForm';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Consultation = () => {
    const [isShowPopup, setShowPopup ] = useState(false);
    const { isDesktop } = useContext(DeviceContext);

    return (
        <>
            <section className={style.container}>
                <h3 className={style.title}>ОСОБИСТА КОНСУЛЬТАЦІЯ</h3>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <p className={style.subtitle}>
                            За <span className={style.highlightedText}>70-90 хв</span> зі мною ти отримаєш:
                        </p>
                        <ul className={style.benefits}>
                            <li className={style.benefit}>
                                Розберемо всі проблемні точки викладання
                            </li>
                            <li className={style.benefit}>
                                Правильне позиціонування перед студентами
                            </li>
                            <li className={style.benefit}>
                                Як делегувати,зібрати команду і на яких умовах
                            </li>
                            <li className={style.benefit}>
                                Договір «викладач-студент» і його компоненти
                            </li>
                            <li className={style.benefit}>
                                Облік студентів, як вести CRM
                            </li>
                            <li className={style.benefit}>
                                Вигорання,причини і методи запобігання
                            </li>
                            <li className={style.benefit}>
                                Як підвисити ціну
                            </li>
                            <li className={style.benefit}>
                                Пошук клієнтів
                            </li>
                        </ul>
                        {
                            !isDesktop
                            && <Button
                                className={style.button}
                                onClick={() => setShowPopup(true)}
                            >
                                записатись
                            </Button>
                        }
                    </div>
                    {isDesktop && <ReservationForm className={style.form}/>}
                </div>
            </section>
            {
                !isDesktop
                    && <Popup
                         isOpen={isShowPopup}
                         className={style.popup}
                         onClose={() => setShowPopup(false)}
                       >
                         <ReservationForm className={style.form}/>
                       </Popup>
            }
        </>
    );
};

export default Consultation;
