import React, { useState, useEffect, useRef } from 'react';

import style from './style.scss';

const StickyBox = (props) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const items = props.items;
    const description = items[selectedItemIndex].description;
    const descriptionRef = useRef(null);

    // Обработчик события скролла правого блока
    function handleScroll() {
        const scrollTop = descriptionRef.current.scrollTop;
        let index = 0;
        let sum = 0;
        // Определяем, какой элемент сейчас отображается в верхней части блока
        for (let i = 0; i < items.length; i++) {
            sum += items[i].height;
            if (sum > scrollTop) {
                index = i;
                break;
            }
        }
        setSelectedItemIndex(index);
    }

    useEffect(() => {
        // Устанавливаем высоту каждого элемента
        const descriptionElements = descriptionRef.current.children;
        for (let i = 0; i < descriptionElements.length; i++) {
            items[i].height = descriptionElements[i].offsetHeight;
        }
    }, [items]);

    return (
        <div className={style.container}>
            <div style={{ flex: "0 0 200px", position: "sticky", top: 0 }}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            padding: "10px",
                            backgroundColor:
                                selectedItemIndex === index ? "#eee" : "transparent",
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div
                style={{ flex: 1, overflowY: "scroll", height: "300px" }}
                onScroll={handleScroll}
                ref={descriptionRef}
            >
                {description}
            </div>
        </div>
    );
};

export default StickyBox;
