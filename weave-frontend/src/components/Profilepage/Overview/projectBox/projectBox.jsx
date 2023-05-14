import React from "react";
import "./projectBox.css";
import SellIcon from "@mui/icons-material/Sell";
const projectBox = () => {
  return (
    <>
      <div className="projectBox-container">
        <h3 className="project-tag">React</h3>
        <div className="project-title-container">
          <h2 className="project-title">Weave</h2>
        </div>
        <ul className="language-tags">
          <li>
            {" "}
            <span>
              {" "}
              <SellIcon />
              <p>javascript</p>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span>
              <SellIcon />
              <p>html/css</p>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default projectBox;
