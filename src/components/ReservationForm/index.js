import React from 'react';
import Button from  'Components/Button';
import { useDispatch } from 'react-redux';
import { innerServices } from 'Services';
import * as actions from 'Actions/actions';
import { useForm } from 'react-hook-form';
import Textarea from 'Components/Textarea';
import Checkbox from 'Components/Checkbox';
import TextInput from 'Components/TextInput';
import RadioButton from 'Components/RadioButton';

import style from './style.scss';

export const ReservationForm = ({ fromPage  = 'зі сторінки учнів', price = '350 грн. / 10$', className }) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });


    const onSubmit = async (data) => {
       const res =  await innerServices.sendUserData({
           formName: 'БРОНЮВАННЯ',
           fromPage,
           ...data
       });

       if (res.success) {
           reset();
           dispatch(actions.showPopup({
               contents: [{
                   name: 'Success'
               }]
           }))
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
                <p className={style.radioBtnsTitle}>Оберіть месенджер для зв'язку*</p>
                <div className={style.radioBtns}>
                    {errors?.experience?.message && (
                        <div className={style.errorMessage}>
                            { errors.experience.message }
                        </div>
                    )}
                    <RadioButton
                        value="Telegram"
                        registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                    />
                    <RadioButton
                        value="Viber"
                        registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                    />
                    <RadioButton
                        value="WhatsApp"
                        registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                    />
                </div>
                <TextInput
                    placeholder="Телефон або нікнейм з месенджера* "
                    className={style.input}
                    isError={errors?.phone?.message}
                    isValid={touchedFields?.phone && !errors?.phone && dirtyFields.phone}
                    {...register('phone', {
                        required: 'Заповнить це поле'
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
                    <span className={style.price}>{ price }</span>
                </div>
            </form>
        </>
    );
};

export default ReservationForm;
