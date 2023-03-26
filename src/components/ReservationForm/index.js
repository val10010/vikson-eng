import React from 'react';
import TextInput from 'Components/TextInput';
import Textarea from 'Components/Textarea';
import Button from  'Components/Button';
import Checkbox from 'Components/Checkbox';

import style from './style.scss';

const ReservationForm = ({ className }) => {
    return (
        <form className={`${style.form} ${className || ''}`}>
            <h4 className={style.title}>БРОНЮВАННЯ</h4>
            <TextInput placeholder="Призвище Ім’я*" className={style.input} />
            <TextInput placeholder="Телефон*" className={style.input} />
            <Textarea placeholder="Ціль навчання*" />
            <Button className={style.button} disabled={true}>
                записатись
            </Button>
            <Checkbox>
                даю згоду на обробку своїх персональних даних.
                Підтверджую, що ознайомлений з Політикою обробки персональних даних
            </Checkbox>
            <div className={style.total}>
                <span>Усього:</span>
                <span className={style.price}>250 грн. / 7$</span>
            </div>
        </form>
    );
};

export default ReservationForm;
