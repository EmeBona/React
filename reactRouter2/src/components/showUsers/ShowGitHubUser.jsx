import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ShowGitHubUser() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(false)

  const fetchData = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setFetchError(error);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return (
    <div>
      {fetchLoading && <p>Loading...</p>}
      {fetchError && <p>Error fetching user data: {fetchError.message}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="" />
          <h1>{userData.login}</h1>
        </div>
      )}
    </div>
  );
}

export default ShowGitHubUser;
