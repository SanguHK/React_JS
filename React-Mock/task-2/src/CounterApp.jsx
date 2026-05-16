import React ,{useState} from 'react'

const CounterApp = () => {
    let [count , setCount] = useState(0);

    let handleIncrement = ()=>{
        setCount(count+1);
    }

    let handleDecrement = ()=>{
        setCount(count-1);
    }
    let Reset =()=>{
        setCount(0);
    }
  return (
    <div>
        <h1>Counter Application</h1>
        <h2>Count : {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CounterApp