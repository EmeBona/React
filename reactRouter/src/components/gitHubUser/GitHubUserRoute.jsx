import useGitHubUser from "./useGithubUser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function GitHubUserRoute() {
    const {username} = useParams()
    const { data, load, error, fetchuserData } = useGitHubUser(username);
    useEffect(() => {
      fetchuserData();
    }, [username]);
  
    return (
      <div>
        {username ? username : null}
        {data ? (
          <div>
            <h2>{data.name}</h2>
            <img src={data.avatar_url} alt="avatar" />
          </div>
        ) : (
          <p>No user</p>
        )}
        {load && <p>Loading...</p>}
        {error && <p>{`${error.status} ${error.message}`}</p>}
      </div>
    );
}

export default GitHubUserRoute
