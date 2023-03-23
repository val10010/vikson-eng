import React from 'react';
import style from './style.scss'
import ReservationForm from "Components/ReservationForm";

const Consulting = () =>{

    return(
       <div className={style.consult}>
           <div className={style.container}>
               <div className={style.title}>ОСОБИСТА КОНСУЛЬТАЦІЯ</div>
               <div className={style.consultRow}>
                   <div className={style.advantage}>
                       <div className={style.listTitle}>
                           <p>За <p className={style.changecolor}>70-90  хв</p> зі мною ти отримаєш:</p>
                       </div>
                       <div className={style.list}>
                           <ol>
                               <li>Розберемо всі проблемні точки викладання</li>
                               <li>Правильне позиціонування перед студентами</li>
                               <li>Як делегувати,зібрати команду і на яких умовах</li>
                               <li>Договір «викладач-студент» і його компоненти</li>
                               <li>Облік студентів, як вести CRM</li>
                               <li>Вигорання,причини і методи запобігання</li>
                               <li>Як підвисити ціну</li>
                               <li>Пошук клієнтів</li>
                           </ol>
                       </div>
                   </div>
                    <ReservationForm className={style.form}/>
               </div>
           </div>
       </div>
    );

}

export default Consulting;