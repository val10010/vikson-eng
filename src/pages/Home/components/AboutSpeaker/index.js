import React, { useContext } from 'react';
import Image from 'Components/Image';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import { FACTS } from './constants';

import style from './style.scss';

const AboutSpeaker = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <section className={style.container}>
           <div className={style.content}>
               <h3 className={style.title}>Про спікера</h3>
               <p className={style.desc}>
                   Вікторія, дипломований викладач іноземних мов. <br/>
                   Я усвідомила, що вчити інших людей – it's my cup of tea,
                   коли побачила скільки років люди витрачають марно,
                   так і не навчившись говорити бажаною мовою
               </p>
               {isMobile && <Image src='../../images/home/hero_speaker.png' className={style.hero}/> }
               <ul className={style.facts}>
                   {
                       FACTS.map(item => (
                           <li className={style.fact} key={item}>
                               { item }
                           </li>
                       ))
                   }
               </ul>
           </div>
            {!isMobile && <Image src='../../images/home/hero_speaker.png' className={style.hero}/> }
        </section>
    );
};

export default AboutSpeaker;
