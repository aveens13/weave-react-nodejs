import TopNav from "../topnav";
import SideNav from "../sidenav";
import Home from "../home";
import ExplorePage from "../Explore/Explore";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Project from "../ProjectHome/Project";
import "./user.css";
import { useState } from "react";
import Profilepage from "../Profilepage/profilepage";

function User() {
  // console.table(getmonth(3));
  const [projectId, setProjectId] = useState();

  function handleProject(id) {
    setProjectId(id);
  }
  return (
    <div className="user">
      <BrowserRouter>
        <div className="sidenav">
          <SideNav className="side_nav" />
        </div>
        <div className="rest">
          <TopNav />
          <Routes>
            <Route
              path="/"
              element={<Home className="home" handleClick={handleProject} />}
            />
            <Route
              path="/project"
              element={<Project projectId={projectId} />}
            />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default User;
