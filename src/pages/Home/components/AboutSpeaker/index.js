import React from 'react';
import Image from 'Components/Image';

import style from './style.scss';

const AboutSpeaker = () => {
    const facts = [
        '5 років досвіду',
        '4 професійних викладача в команді',
        'Диплом перекладача і викладача іноземних мов',
        'Cекретна методика - залишати позитивний якор від навчання'
    ];


    return (
        <section className={style.container}>
           <div className={style.content}>
               <h3 className={style.title}>Про спікера</h3>
               <p className={style.desc}>
                   Я усвідомила що вчити інших людей - it's
                   my cup of tea, коли побачила скільки років люди витрачають марно,
                   так і не навчившись говорити бажанною мовою
               </p>
               <ul className={style.facts}>
                   {
                       facts.map(item => (
                           <li className={style.fact} key={item}>
                               { item }
                           </li>
                       ))
                   }
               </ul>
           </div>
            <Image src='../../images/home/hero_speaker.png'/>
        </section>
    );
};

export default AboutSpeaker;
