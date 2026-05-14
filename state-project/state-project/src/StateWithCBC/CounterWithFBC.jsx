import React,{Component} from "react";
import { useState } from "react";
const CounterWithFBC = () => {
    let [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1);
    };

    let decrement = () => {
        setCount(count - 1);
    };
    let reset = () => {
        setCount(0);
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default CounterWithFBC;