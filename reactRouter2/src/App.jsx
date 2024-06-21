import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GitHubUsers from './components/gitUsers/GitHubUsers'
import ShowGitHubUser from './components/showUsers/ShowGitHubUser'
import IndexMessage from './components/indexMessage/IndexMessage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<h1>Home!</h1>}/>
        <Route path="/users" element={<GitHubUsers />}>
          <Route index element={<IndexMessage />} />
        </Route>
        <Route path="users/:username" element={<ShowGitHubUser />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
