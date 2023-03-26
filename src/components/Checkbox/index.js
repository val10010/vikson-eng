import React, {useCallback, useState} from 'react';

import style from './style.scss';

const Checkbox = ({ className, children, onClick }) => {
    const [isChecked, setChecked] = useState(false);

    const handleOnChange = useCallback(() => setChecked(!isChecked), [setChecked, isChecked])

    return (
        <label  className={`${style.label} ${className}`}>
            <div className={style.wrapper}>
                <input checked={isChecked} onChange={onClick || handleOnChange} type="checkbox" />
                <span className={style.checkbox} />
            </div>

            { children }
        </label>
    );
};

export default Checkbox;
