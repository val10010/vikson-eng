import Toggle from 'Components/Toggle';
import Button from 'Components/Button';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import React, { useCallback, useContext } from 'react';
import ReservationForm from 'Components/ReservationForm';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const TrialLesson = () => {
    const dispatch = useDispatch();
    const { isDesktop } = useContext(DeviceContext);

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'ReservationForm',
                props: {
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
            <section className={style.container}>
                <h3 className={style.title}>Пробний урок</h3>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <p className={style.subtitle}>
                            За <span className={style.highlightedText}>40 хв</span> ти отримаєш:
                        </p>
                        <ul className={style.benefits}>
                            <li className={style.benefit}>
                                Знайомство зі своїм викладачем
                            </li>
                            <li className={style.benefit}>
                                Аналіз вашого рівня
                            </li>
                            <li className={style.benefit}>
                                Ознайомлення з методом викладання
                            </li>
                            <li className={style.benefit}>
                                Відповіді на всі ваші запитання
                            </li>
                            <li className={style.benefit}>
                                2 - 4 вправи на англійській мові
                            </li>
                            <li className={style.benefit}>
                                Домашнє завдання
                            </li>
                        </ul>
                        {
                            !isDesktop
                            && <Button
                                className={style.button}
                                onClick={handleBtnClick}
                            >
                                записатись
                            </Button>
                        }
                        <Toggle>
                            <div>Чому пробний урок платний?</div>
                            <div>
                                Ми цінуємо час людей, даємо користь, аналізуємо ваш рівень.
                                Викладачі розповідають як легко та зручно освоїти бажаний рівень англійської .
                                На жаль в нас лише 24 години на добу, цей час ми використовуємо максимально продуктивно,
                                надаючи корисні знання. Працюємо з людьми яких поважаємо , і котрі поважають нас.
                                Саме тому пробний урок у нас <span className={style.highlightedText}>платний</span>.
                            </div>
                        </Toggle>
                    </div>
                    {isDesktop && <ReservationForm className={style.form}/>}
                </div>
            </section>
        </>
    );
};

export default TrialLesson;
