import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const PlanDetails = ({ isOpen, onClose, onBtnClick, className, details, id }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`${style.overlay} ${className}`} onClick={onClose}>
            <div className={style.container} onClick={(e) => e.stopPropagation()}>
                <h4 className={style.title}>{ details[id].title }</h4>
                <div className={style.content}>
                    {
                        details[id].blocks[0]
                            && <div className={style.block}>
                            { details[id].blocks[0].subtitle && <h5 className={style.subtitle}>{details[id].blocks[0].subtitle}</h5> }
                                    <ul className={style.list}>
                                        {
                                            details[id].blocks[0].items.map(item => (
                                                <li key={item} className={style.item}>
                                                    { item } заняття
                                                    <span className={style.price}>{ details[id].blocks[0].price * item } грн.</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                    }
                    {
                        details[id].blocks[1]
                        &&  !details[id].blocks[1].isHidden
                            ?
                            <div className={style.block}>
                                { details[id].blocks[1].subtitle && <h5 className={style.subtitle}>{details[id].blocks[1].subtitle}</h5> }
                                <ul className={style.list}>
                                    {
                                        details[id].blocks[1].items.map(item => (
                                            <li key={item} className={style.item}>
                                                { item } заняття
                                                <span className={style.price}>{ details[id].blocks[1].price * item } грн.</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                             </div>
                            :
                            <div className={style.block}>
                                <h5 className={style.subtitle}>Заняття з викладачем з команди від 350 грн</h5>
                                <Button
                                    href="/team"
                                    className={style.btnTeam}
                                >
                                    обрати викладача
                                </Button>
                            </div>
                    }
                </div>
                <Button
                    onClick={onBtnClick}
                    className={style.button}
                >
                    навчатись
                </Button>
                <button className={style.close} onClick={onClose}>
                </button>
            </div>
        </div>
    );
};

export default PlanDetails;
