import { FC } from 'react';

interface MobileProps {
    renders: number;
}
export const Mobile:FC<MobileProps> = ({renders}) => {
    return (
        <div style={{ backgroundColor: "red" }}>
            <h1>Mobile</h1>
            <h2>Renders: {renders}</h2>            
        </div>
    )
}