import { useState } from 'react';
import GitHubUser from './GitHubUser';
import { Outlet } from 'react-router-dom';

function GitHubUsers() {
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserList((currentList) => [...currentList, username]);
    setUsername(''); // Limpiar el campo de entrada después de agregar el usuario
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
        {userList.map((item, index) => (
          <li key={index}>
            <GitHubUser username={item} />
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default GitHubUsers;

