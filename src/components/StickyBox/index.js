import React, { cloneElement, useEffect, useState, useRef, Children } from 'react';

import style from './style.scss';

const StickyBox = ({ children, menuItems }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const index = contentRefs.current.reduce((closestIndex, ref, idx) => {
                const rect = ref.getBoundingClientRect();
                const prevRect = contentRefs.current[idx - 1]?.getBoundingClientRect();

                if (idx === 0) {
                    return rect.bottom - 20 <= window.innerHeight ? idx : -1;
                } else if (prevRect && prevRect.bottom - 20 <= 0 && rect.bottom - 20 > 0) {
                    return idx;
                } else {
                    return closestIndex;
                }
            }, -1);

            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeIndex]);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const index = menuItems.findIndex((item) => item.hash === hash);

        if (index !== -1) {
            setActiveIndex(index);
            contentRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    }, [menuItems]);

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        contentRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        window.location.hash = `#${menuItems[index].hash}`;
    };

    return (
        <div className={style.container}>
            <ul className={style.items}>
                {
                    menuItems.map(({item}, index) => (
                        <li
                            key={item}
                            onClick={() => handleMenuItemClick(index)}
                            className={`${style.item} ${index === activeIndex ? style.active : ''}`}
                        >
                            { item }
                        </li>
                    ))
                }
            </ul>

            {
                cloneElement(children, {
                    className: ` ${style.content || ''} ${children?.props?.className || ''}`,
                    children: Children.map(children.props.children, (child, index) => (
                        <div
                            key={index}
                            ref={(element) => (contentRefs.current[index] = element)}
                        >
                            { child }
                        </div>
                    ))
                })
            }
        </div>
    );
};

export default StickyBox;
