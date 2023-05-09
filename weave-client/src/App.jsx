import "./App.css";
import Login from "./components/Login/login";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Signup from "./components/Login/signup";
import ExplorePage from "./pages/Explore";
import Navbar from "./components/Navbar";
import UserHome from "./pages/UserHome";
import Myprojects from "./pages/MyProjects";
import Register from "./components/Register/Register";
import CreateProject from "./components/CreateProject/CreateProject";
import Project from "./components/ProjectHome/Project";

function App() {
  const [login, setState] = useState(false);

  if (!login) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            {/* <Route path="/login/user" element={<Login />} /> */}
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/project" element={<Project />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/projects" element={<Myprojects />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
