import { useState } from 'react';

const State = () => {

    const [count, setCount] = useState(0);

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