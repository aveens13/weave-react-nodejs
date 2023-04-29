import {
  GitHub,
  DownloadForOffline,
  Close,
  CalendarToday,
} from "@mui/icons-material";

export default function DropDown(props) {
  let tags = props.project.tags;
  const tagArray = tags.split(",");
  const date = new Date(props.project.deadline);
  const deadline = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="drop--main">
      <div className="drop-nav">
        <nav>
          <ul>
            <li>
              <GitHub />
              <a href={props.project.github_link} target="_blank">
                Github
              </a>
            </li>
            <li>
              <DownloadForOffline /> Download Proposal
            </li>
            <li onClick={props.handleClick} className="closeicon">
              <Close />
            </li>
          </ul>
        </nav>
        <hr />
        <div className="project--details">
          <h3>{props.project.projectTitle}</h3>
          <div className="drop--info">
            <p className="fas-fa-grey">Members</p>
            <p className="fas-fa-black">{props.project.members.length + 1}</p>
          </div>
          <div className="drop--info">
            <p className="fas-fa-grey">Status</p>
            <div className="status-div">
              <p>Not Started</p>
            </div>
          </div>
          <div className="drop--info">
            <p className="fas-fa-grey">Due Date</p>
            <p className="fas-fa-black">
              <CalendarToday /> {deadline}
            </p>
          </div>
          <div className="drop--info">
            <p className="fas-fa-grey">Description</p>
            <div className="desc-button">
              {props.project.description == "" ? (
                <p className="fas-fa-button">Add Description</p>
              ) : (
                <p>{props.project.description}</p>
              )}
            </div>
          </div>
          <div className="drop--info">
            <p className="fas-fa-grey">Created By</p>
            <p className="fas-fa-black">Avinav Bhattarai</p>
          </div>
          <div className="drop--info">
            <p className="fas-fa-grey">Tags</p>
            <div className="tags-div">
              {tagArray.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-drop">
          <div className="attachments">
            <h3>Attachments</h3>
            <button>Upload</button>
          </div>
        </div>
        <div className="task-notifications"></div>
      </div>
    </div>
  );
}
