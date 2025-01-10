import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  AntDesignOutlined,
  UserOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Avatar, Tooltip, Badge, Progress, Button } from "antd";
export default function ProjectComp({ handleClick }) {
  const [project, setProject] = useState([
    {
      name: "Weave",
      description: "Project Management Software",
      priority: "Urgent",
      progress: 50,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    },
    {
      name: "Locus-hackaweek",
      description: "Edutech Software",
      priority: "Success",
      progress: 100,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
    },
    {
      name: "Prompt Optimizer",
      description: "AI powered optimizer",
      priority: "Urgent",
      progress: 50,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
      name: "Generative AI",
      description: "AI powered Art Generator",
      priority: "Success",
      progress: 100,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
    },
  ]);

  const [visibleProjects, setVisibleProjects] = useState(3); // Initialize with 4 visible projects

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 3); // Increment the visible projects by 4
  };
  return (
    <div className="project-component-hero">
      <div className="overview-info-comp">
        <VisibilityOutlinedIcon
          style={{
            fontSize: "small",
            padding: "0.125rem 0.25rem",
          }}
        />{" "}
        Under Review
      </div>
      <div className="projectInfoComp">
        <div className="projectHead">
          <span>Project Name</span>
          <span>Description</span>
          <span>Asignee</span>
          <span>Due Date</span>
          <span>Status</span>
          <span>Progress</span>
        </div>
        {project.slice(0, visibleProjects).map((p) => (
          <div className="projectComponent-hero">
            <span onClick={() => handleClick(p)} className="projectname-css">
              {p.name}
            </span>
            <span>{p.description}</span>
            <span>
              <Avatar.Group
                max={{
                  count: 2,
                  style: {
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  },
                }}
              >
                <Avatar src={p.avatar} />
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                  }}
                >
                  {Array.from(p.name)[0]}
                </Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                    }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{
                    backgroundColor: "#1677ff",
                  }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </span>
            <span>Feb 14, 2025</span>
            <span>
              <Badge
                status={p.priority == "Urgent" ? "error" : "success"}
                text={p.priority}
                style={{
                  border: "1px solid #fff2f2",
                  padding: "0.12rem 0.5rem",
                  borderRadius: "0.25rem",
                }}
              />
            </span>
            <span>
              {p.progress == 50 ? (
                <Progress
                  percent={50}
                  size="small"
                  status="exception"
                  style={{ width: "8rem" }}
                />
              ) : (
                <Progress
                  percent={100}
                  size="small"
                  style={{ width: "8rem" }}
                />
              )}
            </span>
          </div>
        ))}
        {visibleProjects < project.length && (
          <Button
            onClick={handleViewMore}
            type="link"
            style={{ marginTop: "1rem" }}
          >
            View More
          </Button>
        )}
      </div>
    </div>
  );
}
