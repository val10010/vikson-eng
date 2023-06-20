import { LIST } from './constants';
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
                    fromPage: 'зі сторінки вчителів',
                    price: '2400 грн. / 64$',
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
        <section className={style.container}>
            <h3 className={style.title}>ОСОБИСТА КОНСУЛЬТАЦІЯ</h3>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <p className={style.subtitle}>
                        За <span className={style.highlightedText}>70-90 хв</span> зі мною ти отримаєш:
                    </p>
                    <ul className={style.benefits}>
                        {
                            LIST.map(item => (
                                <li key={item} className={style.benefit}>
                                    { item }
                                </li>
                            ))
                        }
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
                </div>
                {isDesktop
                    && <ReservationForm
                          className={style.form}
                          price="1800 грн. / 48$"
                          fromPage="зі сторінки вчителів"
                        />
                }
            </div>
        </section>
    );
};

export default Consultation;
