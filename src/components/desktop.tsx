import { FC } from 'react';

interface DesktopProps {
    renders: number;
}

export const Desktop: FC<DesktopProps> = ({ renders }) => {
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>Desktop</h1>
            <h2>Renders: {renders}</h2>
        </div>
    );
};
