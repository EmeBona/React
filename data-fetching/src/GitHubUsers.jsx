import { useState } from "react"
import GitHubUser from './GitHubUser.jsx'

function GitHubUsers() {
    const [username, setUsername] = useState("")

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }   

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange= {handleUsernameChange} value = {username} type = "text" placeholder = "Enter a GitHub username" />
            <button>Submit</button>
        </form>
        <GitHubUser username={username}/>
    </div>
  )
}

export default GitHubUsers