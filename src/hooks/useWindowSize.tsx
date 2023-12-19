import { useState, useEffect } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        renders: 0,
        isDesktopResolution: globalThis.innerWidth >= 768,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize((prev) => ({
                renders: prev.renders + 1,
                isDesktopResolution: globalThis.innerWidth >= 768,
            }));
        }
        globalThis.addEventListener('resize', handleResize);
        handleResize();

        return () => globalThis.removeEventListener('resize', handleResize);
    }, []);
    return { windowSize };
}
