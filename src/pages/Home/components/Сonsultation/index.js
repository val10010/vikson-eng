import React from 'react';
import Toggle from 'Components/Toggle';
import ReservationForm from 'Components/ReservationForm';

import style from './style.scss';

const Consultation = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>ОСОБИСТА КОНСУЛЬТАЦІЯ</h3>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <p className={style.subtitle}>
                        За <span className={style.highlightedText}>20 хв</span> зі мною ти отримаєш:
                    </p>
                    <ul className={style.benefits}>
                        <li className={style.benefit}>
                            Аналіз твого рівня англіскої експертом
                        </li>
                        <li className={style.benefit}>
                            Демонстрація процессу навчання (виконаємо 2 круті вправи)
                        </li>
                        <li className={style.benefit}>
                            Розповідь про авторську систему навчання в <span className={style.highlightedText}>Miro</span>
                        </li>
                        <li className={style.benefit}>
                            Відповіді на усі твої запитання
                        </li>
                    </ul>
                    <Toggle>
                        <div>Чому консультація платна?</div>
                        <div>
                            Вже півтора роки я провожду особисті консультаціі,
                            де даю велику користь і розуміння про шлях до бажаного рівня англійскої.
                            На жаль в мене всього 24 години на день. Цей час я використовую надаючи користь клієнтам,
                            які реально бажають її отримати. Саме тому консультація <span className={style.highlightedText}>платна</span>.
                        </div>
                    </Toggle>
                </div>
                <ReservationForm className={style.form} />
            </div>
        </section>
    );
};

export default Consultation;
