import { useEffect, useState } from "react"
import CounterDisplay from "./CounterDisplay"

function State() {
    const [count, setCounter] = useState(0)

    useEffect(()=>{
        console.log(`The value of the counter is ${count}`);
    } , [count])


    function handleCounterIncrement(){
        setCounter(count + 1)
    }

    function handleCounterDecrement(){
        setCounter(count - 1)
    }

    function handleCounterReset(){
        setCounter(0)
    }

  return (
    <div>
        <CounterDisplay count = {count}/>
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
  )
}

export default State