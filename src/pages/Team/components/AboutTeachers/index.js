import { LIST } from './constants';
import Image from 'Components/Image';
import Button from 'Components/Button';
import Slider from './components/Slider';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import React, {useCallback, useContext, useId} from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const AboutTeachers = () => {
    const dispatch = useDispatch();
    const { isDesktop } = useContext(DeviceContext);

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
    }, []);

    return (
        <section className={style.container}>
            <h3 className={style.title}>Про тічерів</h3>
            <p className={style.desc}>
                Моя команда викладачів - досвідчені професіонали,
                які з радістю навчать вас і закриють всі ваші прогалини
                в знанні англійської  ❤️</p>
            <Slider
                list={LIST}
                className={style.slider}
                childrenPerSlide={isDesktop ? 3 : 1}
            >
                {
                    LIST.map(({ img, name, skils, price }) => (
                        <div key={img} className={style.box}>
                            <div key={img} className={style.sliderImgContainer}>
                                <Image className={style.sliderImg} src={img} />
                            </div>
                            <div className={style.info}>
                                <p className={style.name}>{ name }</p>
                                {
                                    skils.map(item => (
                                        <p key={useId()} className={style.skill}>{ item }</p>
                                    ))
                                }
                                <p className={style.price}>
                                    Ціна за заняття: <span className={style.bold}>{ price }</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <Button
                className={style.btn}
                onClick={handleBtnClick}
            >
                навчатись
            </Button>
        </section>
    );
};

export default AboutTeachers;
