import "./App.css";
import ErrorNotFound from "./components/error/ErrorNotFound";
import GitHubUserRoute from "./components/gitHubUser/GitHubUserRoute";
import GitHubUsers from "./components/gitHubUser/GitHubUsers";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import CurrentLocation from "./components/location/CurrentLocation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<CurrentLocation />} />
        <Route path="/users" element={<GitHubUsers />}>
          <Route path="/users/:username" element={<GitHubUserRoute/>}/>
        </Route>
        <Route path="*" element={<ErrorNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
