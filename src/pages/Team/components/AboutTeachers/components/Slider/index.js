import React, { useState } from 'react';
import { css, Global } from '@emotion/react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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

const Slider = ({ list = [], children, isBubblesNeeded, isButtonNeeded = true, className, childrenPerSlide= 3 }) => {
    const [index, setIndex] = useState(0);
    const bubbles = isBubblesNeeded &&  Array.from({length: list?.length}, (_, i) => i);

    const onNext = () => {
        setIndex(index < list?.length - 1 ? index + 1 : index);
    };

    const onPrev = () => {
        setIndex(index > 0 ? index - 1 : index);
    };

    const startChildIndex = index * childrenPerSlide;
    const endChildIndex = startChildIndex + childrenPerSlide;
    const visibleChildren = children.slice(startChildIndex, endChildIndex);

    return (
        <>
            <Global styles={slideTransitionStyles} />
                <div className={style.container}>
                    {
                        isButtonNeeded &&
                        <div className={style.buttons}>
                            <button onClick={onPrev} disabled={index === 0} className={style.prevButton}>
                            </button>
                            <button onClick={onNext} disabled={endChildIndex >= list?.length} className={style.nextButton}>
                            </button>
                        </div>
                    }
                    <SwitchTransition>
                        <CSSTransition
                            key={list[index].img}
                            timeout={500}
                            classNames="slide"
                        >
                            <div className={className}>
                                {visibleChildren}
                            </div>

                        </CSSTransition>
                    </SwitchTransition>
                    {
                        isBubblesNeeded &&
                        <div className={style.bubbles}>
                            {
                                bubbles.map(numb => {
                                    return (
                                        <span
                                            key={numb}
                                            onClick={() => setIndex(numb)}
                                            className={`${style.bubble} ${numb === index ? style.bubbleActive : ''}`}
                                        />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
        </>
    );
};

export default Slider;
