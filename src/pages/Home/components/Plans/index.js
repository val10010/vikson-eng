import React from 'react';
import TariffPlan from 'Components/TariffPlan';
import { PLANS, PLANS_CHILDREN } from './constants';

import style from './style.scss';

const Plans = () => {

    return (
        <>
            <section className={style.container}>
                <h3 className={style.title}>ТАРИФИ / НАВЧАННЯ</h3>
                <div className={style.plansWrapper}>
                    {
                        PLANS.map(item => <TariffPlan  key={item.number} {...item} />)
                    }
                </div>
            </section>
            <section className={style.forChildren}>
                <div className={style.wrapper}>
                    <div className={style.desc}>
                        <h5 className={style.caption}>Для дітей</h5>
                        <p>
                            Ми дуже зацікавлені в якісному навчанні для дітей,
                            тому в нашій команді є окремий викладач,
                            який займається виключно дітьми від 6 до 16 років.
                        </p>
                    </div>
                    {
                        PLANS_CHILDREN.map(item => <TariffPlan  key={item.number} {...item} />)
                    }
                </div>
            </section>
        </>
    );
};

export default Plans;
