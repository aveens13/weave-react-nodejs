import React from "react";
import "./projectcard.css";
import Progress from "./progress";
import { MoreHorizOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import tg from "../../assets/tag.png";
import avatar from "../../assets/avatars/5.png";
function ProCard(props) {
  const tag = props.project.tags.split(",");
  const dateNow = new Date();
  let deadline = new Date(props.project.deadline);
  let daysRemaining = Math.ceil((deadline - dateNow) / (1000 * 60 * 60 * 24));
  const members = props.project.members;
  console.log(daysRemaining);
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0.95 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="main_card"
      onClick={() => props.handleClick(props.project.projectId)}
    >
      <div className="tags">
        {tag.map((tag) => (
          <div className="tag">
            <span>{tag}</span>
          </div>
        ))}
        <div className="meatball_menu">
          <MoreHorizOutlined />
        </div>
      </div>
      <div className="project_info">
        <h3>{props.project.projectTitle}</h3>
      </div>
      <div className="progress_bar">
        <Progress />
      </div>
      <div className="members">
        {members.map((member) => (
          <span>
            <img src={avatar} alt="" />
            <p className="hide">{member.name}</p>
          </span>
        ))}
        <div className="organization">
          <img src={tg} alt="" />
          <p>Kathmandu University</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProCard;
