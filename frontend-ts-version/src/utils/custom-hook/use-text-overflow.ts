import { useState, useEffect } from 'react';

const UseTextOverflow = (text: string, maxLength: number) => {
    const [overflow, setOverflow] = useState('...');
    useEffect(() => {
        if (text.length > maxLength) {
            setOverflow(text.slice(0, maxLength) + '...');
        } else {
            setOverflow(text);
        }
    }, [maxLength, text]);
    return overflow;
};

export default UseTextOverflow;

