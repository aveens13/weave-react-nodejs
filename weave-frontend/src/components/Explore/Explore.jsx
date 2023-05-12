import { Star, StarOutline, GitHub } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Explore.css";
export default function ExplorePage() {
  const [project, setproject] = useState([]);
  useEffect(() => {
    fetch("/api/project").then((response) => {
      response.json().then((e) => {
        setproject(e);
        console.log(e);
      });
    });
  }, []);
  return (
    <div className="explore-section-hero">
      <ul className="title-list">
        <li>
          <Star />
        </li>
        <li>Project Title</li>
        <li>Tags</li>
        <li>Members</li>
        <li>Supervisor</li>
      </ul>
      <hr />
      {project.map((p) => (
        <ul className="data-list">
          <li>
            <StarOutline />
            <GitHub />
          </li>
          <li>{p.projectTitle}</li>
          <li>{p.tags}</li>
          <li>
            <ul>
              {p.members.map((member) => (
                <li>{member.name}</li>
              ))}
            </ul>
          </li>
          <li>Mr. Rabindra Bista</li>
        </ul>
      ))}
    </div>
  );
}
