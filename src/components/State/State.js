import { useState, useEffect } from 'react';

const State = () => {
    const [count, setCount] = useState(0); // Needs to be here before useEffect to avoid error

    useEffect(() => {
        setCount((50));
    }, []); // Called the dependency array, so this is now like ngOnInit in Angular

    // If we put the count variable here, the component will re-render every time the count changes

    const increment = () => {
        setCount((prevCouunt) => {
            return prevCouunt + 1;
        });
    }

    const decrement = () => {
        setCount((prevCouunt) => {
            return prevCouunt - 1;
        });
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default State;