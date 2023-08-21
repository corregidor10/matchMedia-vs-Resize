import { useEffect, useState } from 'react';

export function useMediaQueriesSize() {
    const mobileSize = window.matchMedia('(max-width: 767px)');
    const deskTopSize = window.matchMedia('(min-width: 768px)');

    const [isMobileResolutionMQ, setIsMobileResolution] = useState<boolean>(!!window.innerWidth && window.innerWidth < 768);
    const [isDesktopResolutionMQ, setIsDesktopResolution] = useState<boolean>(window.innerWidth >= 768);
    const [rendersMQ, setRenders] = useState<number>(0);

    useEffect(() => {
        function updateResolution() {
            if (mobileSize.matches) {
                setIsDesktopResolution(false);
                setIsMobileResolution(true);
            } else if (deskTopSize.matches) {
                setIsDesktopResolution(true);
                setIsMobileResolution(false);
            }

            setRenders((prev) => prev + 1);
        }

        mobileSize.addEventListener('change', updateResolution);
        deskTopSize.addEventListener('change', updateResolution);

        updateResolution();

        return () => {
            window.removeEventListener('change', updateResolution);
            window.removeEventListener('change', updateResolution);
            window.removeEventListener('change', updateResolution);
        };
    }, []);

    return { isMobileResolutionMQ, isDesktopResolutionMQ, rendersMQ };
}
