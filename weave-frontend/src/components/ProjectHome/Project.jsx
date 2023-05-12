import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "./Dropdown";
import Modal from "../Modal/Modal";
import "./project.css";
import Board from "./Board/Board";
import AddTask from "./Addtask";
import File from "./File/File";
import Overview from "./Overview/Overview";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
export default function Project(props) {
  const [showTask, setShowTask] = useState(false);
  const [drop, setDrop] = useState(false);
  const [navig, setNavig] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  const [projectData, setProjectData] = useState({});
  // const navigate = useNavigate();

  // useEffect(() => navigate("/"), [!props.projectId]);
  //Fetch the project data
  const fetchProject = () => {
    fetch(`/api/projectinfo/${props.projectId}`).then((response) => {
      response.json().then((e) => {
        console.log(e);
        setLoading(false);
        setProjectData(e);
      });
    });
  };
  useEffect(fetchProject, []);

  //This adds a new task
  async function handleAddTask(formdata) {
    const response = await fetch(`/api/task/${props.projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formdata,
    });
    response.json().then((e) => {
      console.log(e);
    });
    setIsShowing(false);
  }

  //Function to handle create logsheet
  function handleCreateLogsheet() {
    fetch("/api/logsheet")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "logsheet.pdf";
        a.click(); //Automatically calling the download
      });
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="project-home-hero">
      <div className="document-section">
        <div className="document--hero">
          <div className="top-document-info">
            <ul>
              <li
                onClick={() => setNavig("overview")}
                className={navig == "overview" ? "active" : ""}
              >
                Overview
              </li>
              <li
                onClick={() => setNavig("board")}
                className={navig == "board" ? "active" : ""}
              >
                Board
              </li>
              <li
                onClick={() => setNavig("calendar")}
                className={navig == "calendar" ? "active" : ""}
              >
                Calendar
              </li>
              <li
                onClick={() => setNavig("file")}
                className={navig == "file" ? "active" : ""}
              >
                File
              </li>
              {navig == "board" && (
                <li>
                  <button onClick={() => setIsShowing(true)}>
                    Add New Task
                  </button>
                </li>
              )}
              {navig == "board" && (
                <li>
                  <button onClick={handleCreateLogsheet}>
                    Create Logsheet
                  </button>
                </li>
              )}

              <li className="top-document">
                <div
                  className="drop-icon"
                  onClick={() =>
                    setDrop((prev) => {
                      return !prev;
                    })
                  }
                >
                  <ArrowDropDownIcon />
                </div>
              </li>
            </ul>
          </div>
          {drop && (
            <DropDown
              project={projectData}
              handleClick={() => setDrop(false)}
            />
          )}
        </div>
      </div>
      {navig == "board" ? (
        <Board show={isShowing} />
      ) : navig == "calendar" ? (
        <div>Calendar</div>
      ) : navig == "file" ? (
        <File />
      ) : (
        <Overview project={projectData} />
      )}
      <Modal open={isShowing} close={() => setIsShowing(false)}>
        <AddTask handleAddTask={handleAddTask} project={projectData} />
      </Modal>
    </div>
  );
}
