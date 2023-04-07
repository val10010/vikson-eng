import React from 'react';

import style from './style.scss';

const Popup = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`${style.overlay} ${className}`} onClick={onClose}>
            <div className={style.container} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className={style.close} onClick={onClose}>
                </button>
            </div>
        </div>
    );
};

export default Popup;
