import React from 'react';
import TextInput from 'Components/TextInput';
import Textarea from 'Components/Textarea';
import Button from  'Components/Button';
import { useForm } from 'react-hook-form';
import Checkbox from 'Components/Checkbox';

import style from './style.scss';

const ReservationForm = ({ className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, touchedFields, dirtyFields},
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className={`${style.form} ${className || ''}`}>
            <h4 className={style.title}>БРОНЮВАННЯ</h4>
            <TextInput
                className={style.input}
                placeholder="Призвище Ім’я*"
                isError={errors?.name?.message}
                isValid={touchedFields?.name && !errors?.name && dirtyFields.name}
                {...register('name', { required: 'Заповнить це поле' })}
            />
            <TextInput
                placeholder="Телефон* "
                className={style.input}
                isError={errors?.phone?.message}
                isValid={touchedFields?.phone && !errors?.phone && dirtyFields.phone}
                {...register('phone', {
                    required: 'Заповнить це поле',
                    pattern: {
                        value: /^[0-9!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?~-]+$/,
                        message: 'Введіть вірний формат номеру телефону',
                    },
                })}
            />
            <Textarea
                placeholder="Ціль навчання*"
                isError={errors?.purpose?.message}
                isValid={touchedFields?.purpose && !errors?.purpose && dirtyFields.purpose}
                {...register('purpose', { required: 'Заповнить це поле' })}
            />
            <Button className={style.button} disabled={!isValid}>
                записатись
            </Button>
            <Checkbox
                isError={errors?.consent?.message}
                registerProps={register('consent', { required: 'Це поле обов\'язкове' })}
            >
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
