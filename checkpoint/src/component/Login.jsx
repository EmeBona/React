import { useState } from "react"

function Login() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(false)

function handleUsernameChange (e){
    setUsername(e.target.value)
}

function handlePasswordChange(e){
    setPassword(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    if(password.length >= 5){
        console.log(username, password);
    }else{
        alert("Your password should have more than 5 characters")
        setError(true)
    }
    
}

  return (
    <form onSubmit={handleSubmit}>
      <input onChange= {handleUsernameChange} type="text" placeholder="Insert your username" value={username}/>
      <input onChange={handlePasswordChange} type="text" placeholder="Password" value={password} className= {error ? "password-input" : null}/>
      <button disabled={!username || !password} >Submit</button>
    </form>
  )
}

export default Login
