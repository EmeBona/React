import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GitHubUser from './components/GitHubUser';
import GitHubUsers from './components/GitHubUsers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/users" element={<GitHubUsers />} />
        <Route path="/users/:username" element={<GitHubUser />} />
      </Routes>
    </Router>
  );
}

export default App;
