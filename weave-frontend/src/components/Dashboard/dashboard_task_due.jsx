import React, { useState } from "react";
import { Layout, Dropdown, Button, Space, Menu,Avatar } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import dayjs from "dayjs";
import './dashboard_task_due.css';



const data = [
  {
    task_id: "1",
    task_name: "Build Task_Due",
    status: 0,
    due_date: new Date(2025, 0, 6, 12, 30, 0), 
    project_id: "007",
    project_name: "Weave",
    assigned_people: ["Sulav", "Avinav", "Krishna", "Sashank"]
  },
  {
    task_id: "2",
    task_name: "Design UI for Dashboard",
    status: 1,
    due_date: new Date(2025, 0, 10, 17, 0, 0), 
    project_id: "008",
    project_name: "Flow",
    assigned_people: ["Avinav", "Maya"]
  },
  {
    task_id: "3",
    task_name: "Write Unit Tests",
    status: 0,
    due_date: new Date(2025, 0, 15, 23, 59, 0), 
    project_id: "009",
    project_name: "Surge",
    assigned_people: ["Krishna", "Rohan"]
  },
  {
    task_id: "4",
    task_name: "Integrate API",
    status: 2, 
    due_date: new Date(2025, 1, 5, 10, 0, 0), 
    project_id: "010",
    project_name: "Zenith",
    assigned_people: ["Sulav", "Maya"]
  },
  {
    task_id: "5",
    task_name: "Review and Feedback",
    status: 0,
    due_date: new Date(2025, 1, 12, 14, 0, 0), 
    project_id: "007",
    project_name: "Weave",
    assigned_people: ["Avinav", "Krishna"]
  },
  {
    task_id: "6",
    task_name: "Deploy to Staging",
    status: 1,
    due_date: new Date(2025, 1, 20, 18, 0, 0), 
    project_id: "008",
    project_name: "Flow",
    assigned_people: ["Rohan", "Sulav"]
  },
  {
    task_id: "7",
    task_name: "User Acceptance Testing",
    status: 0,
    due_date: new Date(2025, 2, 1, 11, 0, 0), 
    project_id: "009",
    project_name: "Surge",
    assigned_people: ["Maya", "Krishna"]
  },
  {
    task_id: "8",
    task_name: "Bug Fixes and Refinements",
    status: 0,
    due_date: new Date(2025, 2, 15, 16, 0, 0), 
    project_id: "010",
    project_name: "Zenith",
    assigned_people: ["Sulav", "Avinav"]
  },
  {
    task_id: "9",
    task_name: "Documentation and Release Notes",
    status: 1,
    due_date: new Date(2025, 2, 28, 17, 30, 0), 
    project_id: "007",
    project_name: "Weave",
    assigned_people: ["Rohan", "Maya"]
  },
  {
    task_id: "10",
    task_name: "Project Retrospective",
    status: 0,
    due_date: new Date(2025, 3, 5, 10, 0, 0), 
    project_id: "008",
    project_name: "Flow",
    assigned_people: ["Avinav", "Krishna"]
  }
];

const sortedData = data.sort((a, b) => {
  const today = new Date();
  const timeDiffA = Math.abs(today - new Date(a.due_date));
  const timeDiffB = Math.abs(today - new Date(b.due_date));
  return timeDiffA - timeDiffB;
});

const DashboardTaskDue = () => {

  const items = [
    {
      key: '1',
      value: 'Today',
      label: (
        <a target="_blank">
          Today
        </a>
      ),
      onClick: () => setSelectedFilter("Today"),
    },
    {
      key: '2',
      value: 'This Week',
      label: (
        <a target="_blank">
          This Week
        </a>
      ),
      onClick: () => setSelectedFilter("This Week")
    },
    {
      key: '3',
      value: 'This Month',
      label: (
        <a target="_blank">
          This Month
        </a>
      ),
      onClick: () => setSelectedFilter("This Month"),
    },
    {
      key: '4',
      value: 'This Year',
      label: (
        <a target="_blank">
          This Year
        </a>
      ),
      onClick: () => setSelectedFilter("This Year"),
    },
    {
      key: '5',
      value: 'All',
      label: (
        <a target="_blank">
          All 
        </a>
      ),
      onClick: () => setSelectedFilter("All"),
    },
  ];
  


  const[selectedFilter, setSelectedFilter] = useState("All")

  const filterTasks = (filterType) => {
    console.log("Filtering by:", filterType); // Debug
    const today = new Date();
  
    return data.filter((task) => {
      const dueDate = new Date(task.due_date);
      console.log("Task Date:", dueDate.toDateString()); // Debug
  
      // Exclude tasks whose deadlines have passed
      if (dueDate < today.setHours(0, 0, 0, 0)) {
        return false;
      }
  
      switch (filterType) {
        case 'Today':
          return dueDate.toDateString() === new Date().toDateString();
        case 'This Week':
          const startOfWeek = new Date(today);
          startOfWeek.setDate(today.getDate() - today.getDay());
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 6);
          return dueDate >= startOfWeek && dueDate <= endOfWeek;
        case 'This Month':
          return (
            dueDate.getMonth() === today.getMonth() &&
            dueDate.getFullYear() === today.getFullYear()
          );
        case 'This Year':
          return dueDate.getFullYear() === today.getFullYear();
        default:
          return true;
      }
    });
  };
  
  

  const handleFilterChange = (value) => {
    console.log(value)
    setSelectedFilter(value);
  };

  const filteredData = filterTasks(selectedFilter);

  function formatDueDate(dueDate) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (dueDate.toDateString() === today.toDateString()) {
      return `Today ${dueDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    } else if (dueDate.toDateString() === tomorrow.toDateString()) {
      return `Tomorrow ${dueDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    } else {
      const options = { day: 'numeric', month: 'short', year: 'numeric' }; // Day, short month, and year
      return `${dueDate.toLocaleDateString('en-US', options).replace(/,/g, '')}, ${dueDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    }
  }

  return (
    <div className="dashboard_task_due_main">
      <div className="task_due_header_main_main">
        <div className="task_due_header_main">
          <div className="task_due_header_1">
            <label style={{ color: 'black' }}>Tasks Due</label>
          </div>

          <div className="task_due_header_2">
            <Space wrap>
              <Dropdown
                className="dropdown"
                menu={{ items }}
                placement="bottom"
                onChange={(e) => handleFilterChange(e.value)}
              >
                <Button>{selectedFilter === 'Today' ? 'Today' : selectedFilter}</Button>
              </Dropdown>
            </Space>
          </div>
        </div>
      </div>

      <div className="task_due_content_main_main">
        {filteredData.length === 0 ? (
          <p>No Tasks Due!!</p>
        ) : (
          filteredData.map((d,index) => (
            <div className="task_due_content_main" key={d.task_id}>
              <div className="task_due_content_upper">
                {/* Left Content */}
                <div className="task_due_content_upper_left">
                  <div 
                      className="task_due_content_title"
                      id={`title-${index}`}>
                    <span>{d.task_name}</span>
                  </div>
                  <div className="task_due_content_project">
                    <span>{d.project_name}</span>
                  </div>
                </div>

                {/* Right Content */}
                  <div className="task_due_content_upper_right custom-checkbox">
                    <div key={index}>
                      <input type="checkbox" 
                          id={`checkbox-${index}`}
                          onChange={(e) =>
                            document.getElementById(`title-${index}`).style.textDecoration =
                              e.target.checked ? "line-through" : "none"
                          } />
                      <label htmlFor={`checkbox-${index}`}>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  
                </div>
              </div>

              <div className="divider-div content-div">
                <hr className="divider" />
              </div>
              <div className="task_due_content_lower">
                <div className="task_due_content_deadline">
                  <span>{formatDueDate(new Date(d.due_date))}</span>
                </div>
                <div className="task_due_content_assigned">
                  {/* Add logic to display assigned people */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardTaskDue;