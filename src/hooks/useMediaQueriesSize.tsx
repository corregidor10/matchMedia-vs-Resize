import { useEffect, useState } from 'react';

export function useMediaQueriesSize() {
    const deskTopSize = window.matchMedia('(min-width: 768px)');

    const [isDesktopResolutionMQ, setIsDesktopResolution] = useState<boolean>(window.innerWidth >= 768);
    const [rendersMQ, setRenders] = useState<number>(0);

    useEffect(() => {
        function updateResolution() {
            if (deskTopSize.matches) {
                setIsDesktopResolution(true);
            } else if (!deskTopSize.matches) {
                setIsDesktopResolution(false);
            }

            setRenders((prev) => prev + 1);
        }

        deskTopSize.addEventListener('change', updateResolution);

        updateResolution();

        return () => {
            deskTopSize.removeEventListener('change', updateResolution);
        };
    }, []);

    return { isDesktopResolutionMQ, rendersMQ };
}
