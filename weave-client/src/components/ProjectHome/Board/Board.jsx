import { useState, useRef, useEffect } from "react";
import RectangleIcon from "@mui/icons-material/Rectangle";
import TaskCard from "./Taskcard";
export default function Board({ tasks, handleEvent }) {
  return (
    <div className="board--section">
      <nav>
        <ul>
          <li>
            <div className="top-section">
              <RectangleIcon />
              <p>TO DO</p>
            </div>
            <div className="task-card">
              {tasks.map(
                (task) =>
                  task.status == "created" && (
                    <TaskCard task={task} handleMe={handleEvent} />
                  )
              )}
            </div>
          </li>
          <li>
            <div className="top-section">
              <RectangleIcon />
              <p>IN PROGRESS</p>
            </div>
            <div className="task-card">
              {tasks.map(
                (task) =>
                  task.status == "progress" && (
                    <TaskCard task={task} handleMe={handleEvent} />
                  )
              )}
            </div>
          </li>
          <li>
            <div className="top-section">
              <RectangleIcon />
              <p>Done</p>
            </div>
            <div className="task-card">
              {tasks.map(
                (task) =>
                  task.status == "completed" && (
                    <TaskCard task={task} handleMe={handleEvent} />
                  )
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
