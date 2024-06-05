import { useEffect, useState } from "react";

function GitHubUser({username}){
const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then ((response)=> response.json())
        .then ((json)=> setData(json))
    }, [username])

    return (
    <div>
        {data ? <div>
            <h2>{data.name}</h2>
            <img src={data.avatar_url} alt="avatar" />
        </div> : <p>No user</p>}
    </div>
    )
}

export default GitHubUser;