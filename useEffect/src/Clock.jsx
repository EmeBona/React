import { useEffect, useState } from "react"

function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect (() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000);
    }, [])

  return (
    <div>
        <h2>The current time is: {date.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock