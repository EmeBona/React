import { useState } from "react"

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleUsernameChange(event){
    setUsername(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleRememberChange(event){
    setRemember(event.target.checked);
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(username, password, remember);
  }

  function resetForm(){
    setUsername("");
    setPassword("");
    setRemember(false);


  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleUsernameChange} value={username}/>
        <label htmlFor="username">Password:</label>
        <input type="password" id="password" onChange={handlePasswordChange} value={password}/>
        <label htmlFor="remember">Remember:</label>
        <input type="checkbox" id="remember" onChange={handleRememberChange} checked={remember}/>
        

        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
    </form>
  )
}

export default Login