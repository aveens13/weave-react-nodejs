import "./description.css";
import document from "../../../assets/documents.png";
import { useState, useEffect } from "react";
import image from "../../../assets/image.jpg";
import pdf from "../../../assets/pdf.svg";
import { ModeCommentTwoTone } from "@mui/icons-material";
export default function Description({ brief }) {
  return (
    <div className="description--hero">
      {brief ? (
        <div className="project-brief">
          <div className="wrapper-brief">
            <div className="image-section">
              <img src={image} alt="" />
            </div>
            <div className="brief-section">
              <h2>Project Brief</h2>
              <p>{brief}</p>
              <div className="file-section">
                <ul>
                  <li>
                    <img src={pdf} alt="" />
                    <p>Weave-Proposal.pdf</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="key-resources">
          <h3>Key Resources</h3>
          <div className="resource--card">
            <div className="image-div">
              <img src={document} alt="" />
            </div>
            <div className="add-items">
              <p>
                Allign your team with shared vision with a project brief and
                supporting files.
              </p>
              <div className="add-buttons">
                <button className="create">Create Project brief</button>
                <button className="add">Add files</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="completed-tasks">
        <h3>Completed Tasks</h3>

        <ul>
          <li>
            <div className="card-completed-task">
              <p className="card-title">Design Signup Flow</p>
              <p>Complete the signup flow by this time</p>
              <div className="footer-section">
                <p>Sulav Pokharel</p>
                <div className="comments-hero">
                  <ModeCommentTwoTone />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card-completed-task">
              <p className="card-title">Design Signup Flow</p>
              <p>Complete the signup flow by this time</p>
              <div className="footer-section">
                <p>Sulav Pokharel</p>
                <div className="comments-hero">
                  <ModeCommentTwoTone />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card-completed-task">
              <p className="card-title">Design Signup Flow</p>
              <p>Complete the signup flow by this time</p>
              <div className="footer-section">
                <p>Sulav Pokharel</p>
                <div className="comments-hero">
                  <ModeCommentTwoTone />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
