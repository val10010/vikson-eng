import Popup from 'Components/Popup';
import React, { useState } from 'react';
import { innerServices } from 'Services';
import Button from 'Components/Button';
import { useForm } from 'react-hook-form';
import Checkbox from 'Components/Checkbox';
import Textarea from 'Components/Textarea';
import TextInput from 'Components/TextInput';
import RadioButton from 'Components/RadioButton';

import style from './style.scss';

const CallbackForm = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        const res =  await innerServices.sendUserData({
            formName: 'Форма зворотного зв\'язку',
            ...data
        });

        if (res.success) {
            setPopupOpen(true);
            reset();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className={style.form} >
                <h4 className={style.title}>Форма зворотного зв'язку</h4>
                <div className={style.content}>
                    <div className={style.block}>
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
                    </div>
                    <div className={style.block}>
                        <p className={style.radioBtnsTitle}>Чи є досвід вивченная англійскої мови?*</p>
                        <div className={style.radioBtns}>
                            {errors?.experience?.message && (
                                <div className={style.errorMessage}>
                                    { errors.experience.message }
                                </div>
                            )}
                            <RadioButton
                                id="yes"
                                value="так"
                                className={style.radioBtn}
                                registerProps={register('experience', { required: 'Це поле обов\'язкове' })}
                            />
                            <RadioButton
                                id="no"
                                value="ні"
                                registerProps={register('experience', { required: 'Це поле обов\'язкове' })}
                            />
                        </div>
                        <Textarea
                            placeholder="Коментар"
                            className={style.comment}
                            {...register('comment')}
                        />

                    </div>
                    <Checkbox
                        className={style.checkbox}
                        isError={errors?.consent?.message}
                        registerProps={register('consent', { required: 'Це поле обов\'язкове' })}
                    >
                        даю згоду на обробку своїх персональних даних.
                        Підтверджую, що ознайомлений з Політикою обробки персональних даних
                    </Checkbox>
                </div>
                <Button
                    variant="primary"
                    className={style.button}
                    disabled={!isValid || isSubmitting}
                >
                    Відправити
                </Button>
            </form>
            <Popup
                isOpen={isPopupOpen}
                className={style.popup}
                onClose={() => setPopupOpen(false)}
            >
                <p className={style.infoTitle}>Дякую, ваші дані успішно відправлені!</p>
                <p className={style.infoSubtitle}>З вами зв'яжуться найближчим часом.</p>
            </Popup>
        </>

    );
};

export default CallbackForm;
