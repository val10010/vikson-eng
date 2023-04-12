import React, { useState } from 'react';
import Popup from 'Components/Popup';
import Button from 'Components/Button';
import CallbackForm from 'Components/CallbackForm';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';


const StepSecond = () => {
    const [isCallbackFormOpen, setCallbackFormOpen] = useState(false);
    const list = [
        'За кожним учнем закріплюеться окремий викладач, в інтересах якого наблизити його до результату',
        'Після цього в межах 2-х днів викдалач планує графік навчання та зв’язується з учнем для проведення першого заняття',
        'З кожним із учнем ми підписуємо окремий договір за яким він забов’язаний виходити на заняття згідно розкладу, щоб не витрачати час викладача та інших учнів, бо кожен викладач веде одразу кількох учнів.'
    ];

    return (
        <>
            <div className={style.container}>
                <NumberedList list={list} />
                <Button
                    variant="secondary"
                    className={style.button}
                    onClick={() => setCallbackFormOpen(true)}
                >
                    записатись
                </Button>
            </div>
            <Popup
                isOpen={isCallbackFormOpen}
                className={style.callbackForm}
                onClose={() => setCallbackFormOpen(false)}
            >
                <CallbackForm/>
            </Popup>
        </>
    );
};

export default StepSecond;
