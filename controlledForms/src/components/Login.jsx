import React, { useState } from 'react'

function Login(onLogin) {

    const [data, setData] = useState({
        username: '',
        password: '',
        session: false
    })
   

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


    function handleLoginClick (){
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
    <div>
        <h1>My Form</h1>
        <input name='username' value = {data.username} onChange = {handleInputChange} />
        <input name='password' type='password' value={data.password} onChange = {handleInputChange}/>
        <input name= 'session' type="checkbox" checked={data.session} onChange={handleInputChange}/>
        <button onClick= {handleLoginClick} disabled = {!data.username || !data.password}>Login</button>
        
        <button onClick={handleResetForm}>Reset</button>
    </div>
  )
}

export default Login