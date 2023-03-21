import React, {useCallback, useState} from 'react';

const Checkbox = ({ className, children, onClick }) => {
    const [isChecked, setChecked] = useState(false);

    const handleOnClick = useCallback(() => setChecked(!isChecked), [setChecked, isChecked])

    return (
        <label onClick={onClick || handleOnClick}>
            <input defaultChecked={isChecked} type="checkbox" />
            { children }
        </label>
    );
};

export default Checkbox;
