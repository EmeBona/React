import useGithubUser from './useGithubUser';

function GitHubUser({ username }) {
  const { data, isLoading, error, refetch } = useGithubUser(username);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{`${error.status} ${error.message}`}</p>}
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <img src={data.avatar_url} alt="avatar" />
          <button onClick={refetch}>Refetch User Data</button>
        </div>
      ) : (
        <p>No user</p>
      )}
    </div>
  );
}

export default GitHubUser;

