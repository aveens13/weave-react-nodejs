import "./description.css";
import document from "../../../assets/documents.png";
import { useState, useEffect } from "react";
export default function Description() {
  const [brief, setBrief] = useState("This is the project brief");
  return (
    <div className="description--hero">
      {brief ? (
        <div className="project-brief">
          <div className="wrapper-brief">
            <div className="image-section"></div>
            <div className="brief-section"></div>
          </div>
          <div className="file-section"></div>
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
    </div>
  );
}
