import { useState } from 'react';
import './App.css';
import { useMediaQueriesSize } from './hooks/useMediaQueriesSize';

import { Desktop, Mobile } from './components';
import { useWindowSize } from './hooks/useWindowSize';

export const App = () => {
    const [isResizeEvent, setIsResizeEvent] = useState<boolean>(true);
    const { isDesktopResolutionMQ, isMobileResolutionMQ, rendersMQ } = useMediaQueriesSize();
    const { isDesktopResolution, isMobileResolution, renders } = useWindowSize();
    const message = !isResizeEvent ? 'Toogle to Resize Event' : 'Toogle to Match Media';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 32 }}>
            <button
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={() => setIsResizeEvent((prev) => !prev)}
            >
                {message}
            </button>
            {isResizeEvent && isMobileResolution && <Mobile renders={renders} />}
            {isResizeEvent && isDesktopResolution && <Desktop renders={renders} />}
            {!isResizeEvent && isDesktopResolutionMQ && <Desktop renders={rendersMQ} />}
            {!isResizeEvent && isMobileResolutionMQ && <Mobile renders={rendersMQ} />}
        </div>
    );
};

export default App;
