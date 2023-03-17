import React, { useState } from 'react';

import style from './style.scss';

const Toggle = ({ className, children }) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={`${style.content} ${className || ''}`}>
            {React.Children.map(children, (child, i) => {
                if (i === 0) {
                    return React.cloneElement(child, {
                            onClick: () => setOpen(!isOpen),
                            className: `${ isOpen ? style.open : ''} ${style.title || ''} ${child.props.className || ''}`
                        }
                    );
                }
                return isOpen && React.cloneElement(child, {
                        className: `${style.inner} ${child.props.className || ''}`
                    }
                );
            })}
        </div>
    );
};

export default Toggle;
