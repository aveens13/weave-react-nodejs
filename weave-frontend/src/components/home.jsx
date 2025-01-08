import React, { useEffect, useState } from "react";
import ProCard from "./sub-components/projectcard";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
import {
  AccessTimeFilledOutlined,
  FilterListOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
// import taskdata from "./sub-components/taskdata";
import { Modal } from "antd";
import CreateProject from "./CreateProject/CreateProject";
import { UserContext } from "../App";
function Home(props) {
  const user = React.useContext(UserContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState();
  const [project, setproject] = useState([]);
  const [task, settask] = useState([]);
  const [create, setCreate] = useState(false);
  //Fetch api to fetch the projects info
  useEffect(() => {
    fetch(`/api/project/${user.data.userId}`).then((response) => {
      response.json().then((e) => {
        setproject(e);
        console.log(e);
      });
    });
  }, [create]);

  useEffect(() => {
    fetch(`/api/${user.data.userId}/tasks`).then((response) => {
      response.json().then((e) => {
        settask(e);
      });
    });
  }, []);

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
              userId={user.data.userId}
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
              {task.map((task) => (
                <li className="tasks">
                  <div className="individual_tasks">
                    <div>
                      <label>
                        <input type="checkbox" className="task_checkbox" />
                        <span>{task.title}</span>
                      </label>
                    </div>
                    <div onClick={() => handleClick(task.taskId)}>
                      <ArrowDropDown className="arrow_icon" />
                    </div>
                  </div>

                  {open === task.taskId && (
                    <motion.div
                      animate={{ x: 5 }}
                      transition={{ ease: "easeOut", duration: 0.2 }}
                      className="showing"
                    >
                      <span>Project : {task.project.projectTitle}</span>
                      <span>Information : {task.info}</span>
                      <span>Deadline : {task.deadline.toString()}</span>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3>Upcoming meetings</h3>
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
              <h3>Weave</h3>
            </div>
          </div>
          <div className="individual_meeting"></div>
        </div>
      </div>
      <Modal
        title="Create a project"
        // centered
        open={create}
        onOk={() => setCreate(false)}
        onCancel={() => setCreate(false)}
        footer={null}
        // bodyStyle={{ height: 600 }}
        // width={500}
      >
        <CreateProject close={() => setCreate(false)} />
      </Modal>
      {/* <Modal open={create} close={() => setCreate(false)}>
        <CreateProject close={() => setCreate(false)} />
      </Modal> */}
    </div>
  );
}

export default Home;
