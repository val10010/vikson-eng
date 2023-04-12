import React, { useState } from 'react';
import Popup from 'Components/Popup';
import Button from  'Components/Button';
import { innerServices } from 'Services';
import { useForm } from 'react-hook-form';
import TextInput from 'Components/TextInput';
import Textarea from 'Components/Textarea';
import Checkbox from 'Components/Checkbox';

import style from './style.scss';

const ReservationForm = ({ className }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });


    const onSubmit = async (data) => {
       const res =  await innerServices.sendUserData({
           formName: 'БРОНЮВАННЯ',
           ...data
       });

       if (res.success) {
           setPopupOpen(true);
           reset();
       }

    };

    return (
        <>
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
                <Button className={style.button} disabled={!isValid || isSubmitting}>
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
            <Popup
                isOpen={isPopupOpen}
                className={style.popup}
                onClose={() => setPopupOpen(false)}
            >
                Ваші дані успішно надіслані!
            </Popup>
        </>
    );
};

export default ReservationForm;
