import { useState, useEffect } from 'react';

export default function useMobileSize() {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        // Usamos matchMedia para una detección más eficiente
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        setIsMobile(mediaQuery.matches);

        const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        mediaQuery.addEventListener('change', listener);

        return () => {
            mediaQuery.removeEventListener('change', listener);
        };
    }, []);

    return isMobile;
}

