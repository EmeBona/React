import { useState } from "react";
import GitHubUser from "./GitHubUser.jsx";
import { Outlet } from "react-router-dom";

function GitHubUsers() {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserList((currentList) => [...currentList, username]);
    // setUserList([...userList, username])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleUsernameChange}
          value={username}
          type="text"
          placeholder="Enter a GitHub username"
        />
        <button>Submit</button>
      </form>
       <ul>
        {userList.map((item, index) => {
          return (
            <li key={index}>
              <GitHubUser username={item} />
            </li>
          );
        })}
      </ul>
      <Outlet/>
    </div>
  );
}

export default GitHubUsers;
