import React, {useCallback} from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Header = () => {
    const handlePlanBtnClick = useCallback(() => {
        smoothScrollTo('vacancies');
    }, []);

    return (
        <header className={style.header}>
            <Menu>
                <Link to='/'>Головна</Link>
                <Link to='/for-teachers'>Викладачам</Link>
            </Menu>
            <div className={style.container}>
                <div className={style.content}>
                    <h1 className={style.title}>Вакансії у школі VIKSON.eng</h1>
                    <h3 className={style.desc}>
                        Для кожного вчителя дуже важливо давати максимум користі
                        своїм учням та студентам, працювати у здоровому та ламповому
                        ком’юніті та мати змогу розвивати свої думки та ідеї.
                    </h3>
                    <Button
                        variant="primary"
                        className={style.button}
                        onClick={handlePlanBtnClick}
                    >
                        дивитись усі вакансії
                    </Button>
                </div>
                <Image src='../../images/vacancies/hero_main.jpg' alt="hero" className={style.hero}/>
            </div>
        </header>
    );
};

export default Header;
