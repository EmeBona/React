import { useEffect, useRef, useState } from "react"

function Counter({initialValue = 0}) {
    const [count, setCounter] = useState(initialValue)
    const directionRef = useRef({count: initialValue, direction:""})


    useEffect(()=>{
        if(count > directionRef.current.count){
            updateDirection ("up")
        } else if (count < directionRef.current.count){
            updateDirection("down")
        }

        directionRef.current.count = count
    } , [count])

    function updateDirection(newDirection){
        if(directionRef.current.direction !== newDirection){
            directionRef.current.direction = newDirection
            console.log(`Direction changed to: ${directionRef.current.direction}`);
        }
    }


    function handleCounterIncrement(){
        setCounter(prevCount => prevCount + 1)
    }

    function handleCounterDecrement(){
        setCounter(prevCount => prevCount -1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

  return (
    <div>
         <h2>I have now counted to: {count}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
  )
}

export default Counter