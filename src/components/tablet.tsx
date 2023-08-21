import { FC } from 'react';

interface TabletProps {
    renders: number;
}

export const Tablet:FC<TabletProps> = ({renders}) => {
    return (
        <div style={{ backgroundColor: "green" }}>
            <h1>Tablet</h1>
            <h2>Renders: {renders}</h2>            
        </div>
    )
}