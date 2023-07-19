import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import * as actions from 'Actions/actions';
import { CONSULTATION_PRICE } from 'Main/constants';

import style from './style.scss';

const Header = () => {
    const dispatch = useDispatch();

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'ReservationForm',
                props: {
                    price: CONSULTATION_PRICE,
                    className: style.formInPopup,
                    fromPage: 'зі сторінки вчителів',
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
        <header className={style.header}>
            <Menu isShowPlanBtn={true}>
                <Link to='/'>Головна</Link>
                <Link to='/team'>Команда</Link>
                <Link to='/vacancies'>Вакансії</Link>
            </Menu>
            <div className={style.container}>
                <div className={style.content}>
                    <h1 className={style.title}>
                        ВИКЛАДАЧІ - ТВОРЦІ МАЙБУТНЬОГО
                    </h1>
                    <h3 className={style.subtitle}>
                        Наша місія - поширювати хороші практики навчання серед викладачів,
                        у результі чого мати велику кількість людей, які дійсно досягли результатів.
                        Саме тому в нас є особиста програма навчання окремо для викладачів у формі інтенсивів
                        та особистих консультацій від експерта у сфері навчання англійської мови.
                    </h3>
                    <Button
                        className={style.button}
                        onClick={handleBtnClick}
                    >
                        почати навчання
                    </Button>
                </div>
                <Image className={style.img} src="../../../../images/forTeacher/header_hero.jpg" alt="English teacher" />
            </div>
        </header>
    );
};

export default Header;
