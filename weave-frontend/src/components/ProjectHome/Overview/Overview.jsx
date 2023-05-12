import "./overview.css";
import FlagIcon from "@mui/icons-material/Flag";
import { Send, AccessTimeFilledTwoTone } from "@mui/icons-material";
import img from "../../../assets/avatars/2.png";
import img1 from "../../../assets/avatars/4.png";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Description from "./Description";
export default function Overview({ project }) {
  async function handleAddLink() {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });

    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  }
  return (
    <>
      <div className="project-info-hero">
        <div className="header">
          <h1>{project.projectTitle}</h1>
          <button>
            <AccessTimeFilledTwoTone />
            Assign meeting time
          </button>
        </div>
        <div className="info-div">
          <p className="grey">Priority</p>
          <div className="priority-tag">
            <FlagIcon />
            Normal
          </div>
        </div>
        <div className="info-div">
          <p className="grey">Members</p>
          {project.members.map((member) => (
            <div className="member-info" key={member.userId}>
              <img src={img} alt="" />
              <p className="name">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="info-div">
          <p className="grey">Github</p>
          <p className="link">Add github Link</p>
        </div>
        <div className="info-div">
          <p className="grey">Supervisor</p>
          <p className="name">Mr. Hari</p>
        </div>
      </div>
      <div className="project-announcements">
        <div className="main-overview">
          <Description brief={project.desccription} />
        </div>
        <div className="activity">
          <h3>Activity</h3>
          <div className="comment-section">
            <div className="message-body">
              <div className="name-info">
                <img src={img1} alt="" />
                <p>Shyam</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                Should we conduct a meeting next week?
              </div>
            </div>
            <div className="message-body">
              <div className="name-info">
                <img src={img1} alt="" />
                <p className="supervisor">Mr Hari</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                We are unable for a meeting next week
              </div>
            </div>
            <div className="message-body">
              <div className="name-info">
                <img src={img1} alt="" />
                <p>Shyam</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                Should we conduct a meeting next week?
              </div>
            </div>
            <div className="message-body">
              <div className="name-info">
                <img src={img1} alt="" />
                <p className="supervisor">Mr Hari</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                We are unable for a meeting next week
              </div>
            </div>
            <div className="message-body">
              <div className="name-info">
                <img src={img1} alt="" />
                <p>Shyam</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                Should we conduct a meeting next week?
              </div>
            </div>
            <div className="message-body">
              <div className="name-info">
                <img src={img1} alt="" />
                <p className="supervisor">Mr Hari</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                Please prepare the respective logsheets print outs.
              </div>
            </div>
          </div>
          <div className="announce">
            <input type="text" placeholder="Announce" />
            <div className="icon">
              <Send />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
