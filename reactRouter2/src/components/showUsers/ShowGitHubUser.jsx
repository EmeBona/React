import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ShowGitHubUser() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${username}`);
    const retrievedData = await data.json();

    setUserData(retrievedData);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return (
    <div>
      {userData ? (
        <div>
          {" "}
          <img src={userData.avatar_url} alt="" />
          <h1>{userData.login}</h1>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default ShowGitHubUser;
