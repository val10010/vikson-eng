import Button from 'Components/Button';
import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';


const StepSecond = () => {
    const list = [
        'За кожним учнем закріплюеться окремий викладач, в інтересах якого наблизити його до результату',
        'Після цього в межах 2-х днів викдалач планує графік навчання та зв’язується з учнем для проведення першого заняття',
        'З кожним із учнем ми підписуємо окремий договір за яким він забов’язаний виходити на заняття згідно розкладу, щоб не витрачати час викладача та інших учнів, бо кожен викладач веде одразу кількох учнів.'
    ];

    const dispatch = useDispatch();

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
        <div className={style.container}>
            <NumberedList list={list} />
            <Button
                variant="secondary"
                className={style.button}
                onClick={handleBtnClick}
            >
                записатись
            </Button>
        </div>
    );
};

export default StepSecond;
