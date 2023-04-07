import { useEffect } from 'react';

export const useSmoothScrollToHash = (hash) => {
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.slice(1));

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
};
