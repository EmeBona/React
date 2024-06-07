import { useEffect, useRef, useState } from "react"

function FocusableInput() {
    const [data, setData] = useState({
        username: '',
        password: '',
        session: false
    })
   
    const inputRef = useRef(null)

    useEffect (()=> {
        inputRef.current?.focus()
    }, [])

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return { 
                ...d,
                [name]: type === 'checkbox' ? checked : value
             }
        })
    }


    function handleLoginClick (event){
        event.preventDefault()
        onLogin ({username, password, session})
    }

    function handleResetForm(){
        setData({
            username: '',
            password: '',
            session: false
        })
        
    }   
  return (
    <form onSubmit={handleLoginClick}>
        <h1>Focusable Input</h1>
        <input ref={inputRef} name='username' value = {data.username} onChange = {handleInputChange} />
        <input name='password' type='password' value={data.password} onChange = {handleInputChange}/>
        <input name= 'session' type="checkbox" checked={data.session} onChange={handleInputChange}/>
        <button onClick= {handleLoginClick} disabled = {!data.username || !data.password}>Login</button>
        
        <button onClick={handleResetForm}>Reset</button>
    </form>
  )
}

export default FocusableInput