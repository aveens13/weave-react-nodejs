import React, { useEffect, useState } from "react";
import ProCard from "./sub-components/projectcard";
import { useNavigate } from "react-router-dom";
import "./home.css";
import {
  AccessTimeFilledOutlined,
  FilterListOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
import taskdata from "./sub-components/taskdata";
import Modal from "./Modal/Modal";
import CreateProject from "./CreateProject/CreateProject";

function Home(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState();
  const [project, setproject] = useState([]);
  const [task, settask] = useState(taskdata);
  const [create, setCreate] = useState(false);
  //Fetch api to fetch the projects info
  useEffect(() => {
    fetch("/api/project").then((response) => {
      response.json().then((e) => {
        setproject(e);
        console.log(e);
      });
    });
  }, [create]);

  function handleClick(id) {
    console.log(id);
    if (open == id) setOpen();
    else setOpen(id);
  }

  //function to fetch the specific project

  return (
    <div className="main_home">
      <div className="project">
        <div className="title">
          <div className="title_left">
            <h1>Project</h1>
          </div>
          <div className="title_right">
            <FilterListOutlined />
            <button id="create" onClick={() => setCreate(true)}>
              Create Project
            </button>
          </div>
        </div>

        <div className="card">
          {project.map((projectInfo) => (
            <ProCard
              project={projectInfo}
              handleClick={(id) => {
                props.handleClick(id);
                navigate("/project");
              }}
            />
          ))}
        </div>
      </div>
      <div className="side_card">
        <div className="main_task_due">
          <div className="task_title">
            <h1>Tasks Due This Week</h1>
          </div>

          <div className="tasks_due">
            <ul>
              {taskdata.map((task) => (
                <li className="tasks">
                  <div className="individual_tasks">
                    <div>
                      <label>
                        <input type="checkbox" className="task_checkbox" />
                        <span>{task.to_do}</span>
                      </label>
                    </div>
                    <div onClick={() => handleClick(task.id)}>
                      <ArrowDropDown className="arrow_icon" />
                    </div>
                  </div>

                  {open === task.id && (
                    <div className="showing">
                      <span>Project : {task.project}</span>
                      <span>Assigned date : {task.assigned_date}</span>
                      <span>Deadline : {task.deadline}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="meetings">
          <div className="individual_meeting">
            <div className="meeting_icon">
              <AccessTimeFilledOutlined fontSize="large" />
            </div>

            <div className="meeting_detail">
              <span>Sunday, 10 April</span>
              <p>
                <b>10:00 am - 10:30 am </b>
              </p>
            </div>
          </div>
          <div className="individual_meeting"></div>
        </div>
      </div>
      <Modal open={create} close={() => setCreate(false)}>
        <CreateProject close={() => setCreate(false)} />
      </Modal>
    </div>
  );
}

export default Home;
