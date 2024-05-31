import { useState, useEffect } from 'react';

const State = () => {
    const [hold, setHold] = useState(false);
    const [count, setCount] = useState(0); 
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setCount(50);
    }, []);

    // If there's no dependency array, the effect will run after every render (or interaction with the component)

    // If there is an empty dependency array, the effect will run only once after the initial render (like ngOnInit in Angular)

    // If there is a dependency array with values, the effect will run after the initial render and after every render where the values in the dependency array have changed (like ngOnChanges in Angular)

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