import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import { useSmoothScrollToHash } from 'Hooks';
import { useLocation } from 'react-router-dom';
import TariffPlan from 'Components/TariffPlan';
import PlanDetails from 'Components/PlanDetails';
import React, {useCallback, useState} from 'react';
import { PLANS, PLANS_CHILDREN, PLANS_DETAILS } from './constants';

import style from './style.scss';

const Plans = () => {
    const [planNumber, setPlanNumber] = useState(null);
    const location = useLocation();
    const dispatch = useDispatch();

    useSmoothScrollToHash(location.hash);

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'CallbackForm',
                props: {
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
        <>
            <section className={style.container} id="plan">
                <h3 className={style.title}>ТАРИФИ / НАВЧАННЯ</h3>
                <div className={style.plansWrapper}>
                    {
                        PLANS.map(item => <TariffPlan  key={item.number} {...item} onClick={setPlanNumber} />)
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
                    <div className={style.box}>
                        {
                            PLANS_CHILDREN.map(item => <TariffPlan  key={item.number} {...item}  onClick={setPlanNumber} />)
                        }
                    </div>
                </div>
            </section>
            <PlanDetails
                id={planNumber}
                details={PLANS_DETAILS}
                isOpen={planNumber !== null}
                onClose={() => setPlanNumber(null)}
                onBtnClick={() => {
                    setPlanNumber(null);
                    handleBtnClick();
                }}
            />
        </>
    );
};

export default Plans;
