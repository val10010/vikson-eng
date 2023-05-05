import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { css, Global } from '@emotion/react';
import Image from 'Components/Image';
import { Link } from 'react-router-dom';

import style from './style.scss'

const slideTransitionStyles = css`
  .slide-enter,
  .slide-appear {
    opacity: 0;
    transform: translateX(5%);
  }
  .slide-enter-active,
  .slide-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }
  .slide-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-exit-active {
    opacity: 0;
    transform: translateX(-5%);
    transition: opacity 500ms, transform 500ms;
  }
`;

const Slider = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    const onNext = () => {
        setIndex(index < reviews.length - 1 ? index + 1 : index);
    };

    const onPrev = () => {
        setIndex(index > 0 ? index - 1 : index);
    };

    return (
        <>
            <Global styles={slideTransitionStyles} />
                <div className={style.wrapper}>
                    <div className={style.buttons} hidden={reviews.length <= 1}>
                        <button onClick={onPrev} disabled={index === 0} className={style.prevButton}>
                        </button>
                        <button onClick={onNext} disabled={index === reviews.length - 1} className={style.nextButton}>
                        </button>
                    </div>
                    <SwitchTransition>
                        <CSSTransition
                            key={reviews[index].id}
                            timeout={500}
                            classNames="slide"
                        >
                            <div>
                                <div className={style.content}>
                                    {reviews[index].content}
                                </div>
                                <div className={style.author}>
                                    <Image src={reviews[index]?.author?.imgPath} alt="author" />
                                    <div className={style.data}>
                                        <p className={style.name}>{ reviews[index]?.author?.info }</p>
                                        <Link to={reviews[index]?.author?.link[0]} target="_blank" className={style.link} >
                                            {reviews[index]?.author?.link[1]}
                                        </Link>
                                    </div>
                                </div>
                             </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
        </>
    );
};

export default Slider;
