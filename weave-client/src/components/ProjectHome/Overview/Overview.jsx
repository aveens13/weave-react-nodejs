import "./overview.css";
import FlagIcon from "@mui/icons-material/Flag";
import SendIcon from "@mui/icons-material/Send";
import img from "../../../assets/avatars/2.png";
export default function Overview() {
  return (
    <>
      <div className="project-info-hero">
        <h1>Weave</h1>
        <div className="info-div">
          <p className="grey">Priority</p>
          <div className="priority-tag">
            <FlagIcon />
            Normal
          </div>
        </div>
        <div className="info-div">
          <p className="grey">Members</p>
          <div className="member-info">
            <img src={img} alt="" />
            <p className="name">Avinav</p>
          </div>
          <div className="member-info">
            <img src={img} alt="" />
            <p className="name">Sulav</p>
          </div>
        </div>
        <div className="info-div">
          <p className="grey">Github</p>
          <p className="link">Add github Link</p>
        </div>
        <div className="info-div">
          <p className="grey">Supervisor</p>
          <p className="name">Mr. Rabindra Bista</p>
        </div>
      </div>
      <div className="project-announcements">
        <div className="main-overview"></div>
        <div className="activity">
          <h3>Activity</h3>
          <div className="comment-section">
            <div className="message-body">
              <div className="name-info">
                <img src={img} alt="" />
                <p>Avinav Bhattarai</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                Should we conduct a meeting next week?
              </div>
            </div>
            <div className="message-body">
              <div className="name-info">
                <img src={img} alt="" />
                <p className="supervisor">Mr Rabindra Bista</p>
                <p className="grey">30 min ago</p>
              </div>
              <div className="message">
                We are not unable for a meeting next week
              </div>
            </div>
          </div>
          <div className="announce">
            <input type="text" placeholder="Announce" />
            <div className="icon">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
