import React, {
    useState, Children, cloneElement
} from 'react';

import style from './style.scss';

const Toggle = ({ className, children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={`${style.content} ${className || ''}`}>
            {
                Children.map(children, (child, i) => {
                    if (i === 0) {
                        return cloneElement(child, {
                                onClick: () => setOpen(!isOpen),
                                className: `${ isOpen ? style.open : ''} ${style.title || ''} ${child?.props?.className || ''}`
                            }
                        );
                    }
                    return isOpen && cloneElement(child, {
                            className: `${style.inner} ${child?.props?.className || ''}`
                        }
                    );
                })
            }
        </div>
    );
};

export default Toggle;
