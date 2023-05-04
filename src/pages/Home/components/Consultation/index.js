import Toggle from 'Components/Toggle';
import Button from 'Components/Button';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import React, { useCallback, useContext } from 'react';
import ReservationForm from 'Components/ReservationForm';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Consultation = () => {
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
                <h3 className={style.title}>ОСОБИСТА КОНСУЛЬТАЦІЯ</h3>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <p className={style.subtitle}>
                            За <span className={style.highlightedText}>20 хв</span> зі мною ти отримаєш:
                        </p>
                        <ul className={style.benefits}>
                            <li className={style.benefit}>
                                Аналіз твого рівня англійської
                            </li>
                            <li className={style.benefit}>
                                Демонстрація процесу навчання (виконаємо 2 круті вправи)
                            </li>
                            <li className={style.benefit}>
                                Розповідь про авторську систему навчання в <span className={style.highlightedText}>Miro</span>
                            </li>
                            <li className={style.benefit}>
                                Відповіді на всі твої запитання
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
                            <div>Чому консультація платна?</div>
                            <div>
                                Вже півтора роки я проводжу особисті консультації,
                                де розповідаю як легко та зручно освоїти бажаний рівень англійської.
                                На жаль, в мене всього 24 години в добі. Цей час я використовую максимально продуктивно,
                                надаючи корисні знання своїм клієнтам, які цього потребують. Саме тому консультація <span className={style.highlightedText}>платна</span>.
                            </div>
                        </Toggle>
                    </div>
                    {isDesktop && <ReservationForm className={style.form}/>}
                </div>
            </section>
        </>
    );
};

export default Consultation;
