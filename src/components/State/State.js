import { useState, useEffect } from 'react';

const State = () => {
    const [hold, setHold] = useState(false);
    const [count, setCount] = useState(0); 
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setCount(50);
    }, []); 

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const handleMouseDown = (mode) => {
        setHold(true);
        if (mode === 'increment') {
            setIntervalId(setInterval(increment, 200));
        } else {
            setIntervalId(setInterval(decrement, 200));
        }
    }

    const handleMouseUp = () => {
        setHold(false);
        clearInterval(intervalId);
    }

    return (
        <div>
            <button onMouseDown={() => handleMouseDown('increment')} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>+</button>
            <p>{count}</p>
            <button onMouseDown={() => handleMouseDown('decrement')} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>-</button>
        </div>
    );
}

export default State;