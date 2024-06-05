function AlertClock() {

    function handleButtonClick(){
        const now = new Date()

        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

  return (
    <div>
       <button onClick={handleButtonClick}>Click me!</button> 
    </div>
  )
}

export default AlertClock