import { Star, StarOutline, GitHub } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Explore.css";
import image from "../../assets/image.jpg";
import avatar from "../../assets/avatars/4.png";
import Modal from "../Modal/Modal";
import ProjectInfo from "./ProjectInfo";
export default function ExplorePage() {
  const [project, setproject] = useState([]);
  const [overview, setOverview] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    fetch("/api/project").then((response) => {
      response.json().then((e) => {
        setproject(e);
        console.log(e);
      });
    });
  }, []);

  function handleClick(id) {
    setId(id);
    setOverview(true);
  }
  return (
    <div className="explore-section-hero">
      <h3>Explore Projects</h3>
      <hr />
      <div className="projects-grid">
        {project.map((p) => (
          <div className="data-list">
            <div className="star--project">
              <StarOutline />
            </div>
            <div className="image-data">
              <img
                onClick={() => handleClick(p.projectId)}
                src={image}
                alt=""
              />
            </div>
            <div className="info">
              <GitHub />
              <p className="name">{p.projectTitle}</p>
              <div className="members">
                {p.members.map((member) => (
                  <span>
                    <img src={avatar} alt="" />
                    <p className="hide">{member.name}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Modal open={overview} close={() => setOverview(false)}>
        <ProjectInfo projectId={id} />
      </Modal> */}
    </div>
  );
}
