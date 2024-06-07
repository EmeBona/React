import { useEffect, useRef, useState } from "react"

function StrictMode() {
    const [data, setData] = useState({
        username: '',
        password: '',
        session: false
    })
   

    const mountedRef = useRef(false)

    useEffect (()=> {
        if (!mountedRef.current){
            mountedRef.current = true
            console.log('Mounting for the first time');
        } else{
            console.log('Mounting again for debug purposes');
        }

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
        <h1>Strict Mode</h1>
        <input name='username' value = {data.username} onChange = {handleInputChange} />
        <input name='password' type='password' value={data.password} onChange = {handleInputChange}/>
        <input name= 'session' type="checkbox" checked={data.session} onChange={handleInputChange}/>
        <button onClick= {handleLoginClick} disabled = {!data.username || !data.password}>Login</button>
        
        <button onClick={handleResetForm}>Reset</button>
    </form>
  )
}

export default StrictMode