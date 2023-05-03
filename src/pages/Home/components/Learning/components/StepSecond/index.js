import Button from 'Components/Button';
import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';


const StepSecond = () => {
    const list = [
        'За кожним учнем закріплюється окремий викладач, який прикладає максимум зусиль для досягнення бажаного результату',
        'Після цього в межах 2-х днів викладач планує графік навчання та зв’язується з учнем для проведення першого заняття',
        'З кожним із учнів ми підписуємо окремий договір, за яким він зобов\'язаний відвідувати заняття згідно розкладу, щоб не витрачати час викладача та інших учнів'
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
