import "./overview.css";
import FlagIcon from "@mui/icons-material/Flag";
import { Send, AccessTimeFilledTwoTone } from "@mui/icons-material";
import img from "../../../assets/avatars/2.png";
import img1 from "../../../assets/avatars/4.png";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Description from "./Description";
import Message from "./message_component/message";
export default function Overview({ project }) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  let ws = new WebSocket("ws://localhost:8000/");
  useEffect(() => {
    // if (ws) {
    //   ws.onerror = ws.onopen = ws.onclose = null;
    //   ws.close();
    // }
    ws.onopen = () => {
      console.log("Connection opened!");
    };
    ws.onmessage = ({ data }) => {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        setMessage(text);
      };
      reader.readAsText(data);
    };
    ws.onclose = function () {
      ws = null;
    };
    // Clean up WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    if (!ws) {
      console.log("No WebSocket connection :(");
      return;
    }
    ws.send(text);
  }

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
          <p className="link" onClick={handleAddLink}>
            Add github Link
          </p>
        </div>
        <div className="info-div">
          <p className="grey">Supervisor</p>
          <p className="name">Mr. Hari</p>
        </div>
      </div>
      <div className="project-announcements">
        <div className="main-overview">
          <Description brief={project.description} />
        </div>
        <div className="activity">
          <h3>Activity</h3>
          <div className="comment-section">
            <Message message={message} />
          </div>
          <div className="announce">
            <input type="text" placeholder="Announce" onChange={handleChange} />
            <div className="icon" onClick={handleClick}>
              <Send />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
