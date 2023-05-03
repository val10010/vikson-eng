import React from 'react';
import Image from 'Components/Image';
import NumberedList from 'Components/NumberedList';
import { ONE_MONTH_LATER, THREE_MONTH_LATER, SIX_MONTH_LATER, ONE_YEAR_LATER } from './constants';

import style from './style.scss';

const Transformation = () => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>Моя трансформація</h4>
            <div className={style.content}>
                <div className={style.wrapper}>
                    <div className={style.block}>
                        <h5 className={style.itemTitle}>
                            Перший <span className={style.highlightedText}>місяць</span> на фрілансі
                        </h5>
                        <Image className={style.img} src="../../../../images/forTeacher/freelance.jpg" alt="freelance"/>
                    </div>
                    <div className={style.block}>
                        <NumberedList list={ONE_MONTH_LATER} className={style.list} classNames={style}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.block}>
                        <h5 className={style.itemTitle}>
                            <span className={style.highlightedText}> 3 місяць </span> навчання на своїх помилках
                        </h5>
                    </div>
                    <div className={style.block}>
                        <NumberedList list={THREE_MONTH_LATER} className={style.list} classNames={style}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.block}>
                        <h5 className={style.itemTitle}>
                            <span className={style.highlightedText}>6 місяців.</span> Поява команди
                        </h5>
                    </div>
                    <div className={style.block}>
                        <NumberedList list={SIX_MONTH_LATER} className={style.list} classNames={style}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.block}>
                        <h5 className={style.itemTitle}>
                            <span className={style.highlightedText}>Рік</span> після початку шляху
                        </h5>
                        <Image className={style.img} src="../../../../images/forTeacher/one_year_later.jpg"/>
                    </div>
                    <div className={style.block}>
                        <NumberedList list={ONE_YEAR_LATER} className={style.list} classNames={style}/>
                    </div>
                </div>
            </div>
            <div className={style.final}>
                “Змогла я - зможеш і ти!”
            </div>
        </div>
    );
};

export default Transformation;
