import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';

import Card from './components/Card';
import { CARDS_LIST } from './constants';

import style from './style.scss';

const OpenVacancies = () => {
    const dispatch = useDispatch();

    const handleBtnClick = useCallback(({ vacancyName }) => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'RecordForInterview',
                props: {
                    vacancyName,
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
    }, [])

    return (
        <section className={style.container} id="vacancies">
            <h3 className={style.title}>ЗАРАЗ ШУКАЄМО</h3>
            <div className={style.content}>
                {
                    CARDS_LIST.map((card, i) => (
                        <Card key={card.title + i} {...card}  onClick={handleBtnClick} />
                    ))
                }
            </div>
        </section>
    );
};

export default OpenVacancies;
