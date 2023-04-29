import { useState } from "react";
import Swal from "sweetalert2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "./Dropdown";
import Modal from "../Modal/Modal";
import "./project.css";
import Board from "./Board/Board";
import AddTask from "./Addtask";
import File from "./File/File";
import Overview from "./Overview/Overview";
export default function Project() {
  const [showTask, setShowTask] = useState(false);
  const [drop, setDrop] = useState(false);
  const [navig, setNavig] = useState("overview");
  const [tasks, setTasks] = useState([
    {
      taskId: 1,
      title: "Weave Project Initiate",
      deadline: Date.now(),
      name: "Avinav Bhattarai",
      status: "progress",
      info: "Initiate the Project",
    },
    {
      taskId: 2,
      title: "Approval",
      deadline: Date.now(),
      name: "Avinav Bhattarai",
      status: "completed",
      info: "Approve the Project",
    },
    {
      taskId: 3,
      title: "Login Form",
      deadline: Date.now(),
      name: "Avinav Bhattarai",
      status: "created",
      info: "Create Login Form",
    },
  ]);
  const [projects, setProjects] = useState({
    projectId: "1",
    projectTitle: "Weave",
    visibility: "public",
    github_link: "https://github.com/aveens13/mymovieslist-react-express",
    deadline: "1993-04-22T00:00:00.000Z",
    tags: "javascript,react,postgresql",
    userId: "avinav-400",
    description: "creative space",
    members: [
      {
        userId: "sulav-655",
        name: "sulav",
        email: "sulav@gmail.com",
        accountType: "User",
      },
      {
        userId: "krishna-600",
        name: "krishna",
        email: "krishna@gmail.com",
        accountType: "User",
      },
      {
        userId: "ankit-700",
        name: "ankit",
        email: "ankit@gmail.com",
        accountType: "User",
      },
    ],
  });
  const [isShowing, setIsShowing] = useState(false);

  //This adds a new task
  function handleAddTask(formdata) {
    setTasks((prev) => {
      return [...prev, formdata];
    });
    console.log(tasks);
    setIsShowing(false);
  }
  //This changes the task's status
  function handleEvent(id, status) {
    console.log(id, status);
    setTasks((prev) => {
      const newTasks = [];
      for (let i = 0; i < prev.length; i++) {
        const currentTask = prev[i];
        if (currentTask.taskId == id) {
          const updatedTask = { ...currentTask, status: status };
          newTasks.push(updatedTask);
        } else {
          newTasks.push(currentTask);
        }
      }
      console.log(newTasks);
      return newTasks;
    });
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
                  <button>Create Logsheet</button>
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
            <DropDown project={projects} handleClick={() => setDrop(false)} />
          )}
        </div>
      </div>
      {navig == "board" ? (
        <Board tasks={tasks} handleEvent={handleEvent} />
      ) : navig == "calendar" ? (
        <div>Calendar</div>
      ) : navig == "file" ? (
        <File />
      ) : (
        <Overview />
      )}
      <Modal open={isShowing} close={() => setIsShowing(false)}>
        <AddTask handleAddTask={handleAddTask} />
      </Modal>
    </div>
  );
}
