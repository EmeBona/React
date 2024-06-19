import useGitHubUser from "./useGithubUser";


function GitHubUser({ username }) {
  const { data, load, error } = useGitHubUser(username);


  return (
    <div>
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

export default GitHubUser;
