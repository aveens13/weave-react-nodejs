import React, { useEffect, useState } from "react";
import "./organization.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import UnsubscribeOutlinedIcon from "@mui/icons-material/UnsubscribeOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CallToActionOutlinedIcon from "@mui/icons-material/CallToActionOutlined";
import { Input, Button, Modal, AutoComplete, Badge } from "antd";
import SideNav from "../sidenav";
import ProjectComp from "./project/Projectcomp";
import Call from "./project/Call";
import ProjectSubmissionCard from "./project/ProjectSubmissionCard";
export default function Organization() {
  const [isModal, setIsmodal] = useState(false);
  const [isInfotab, setIsinfotab] = useState(false);
  const [projectData, setProjectData] = useState({});
  const [options, setOptions] = useState([
    {
      value: "Weave",
    },
    {
      value: "Locus-hackaweek",
    },
    {
      value: "Prompt Optimizer",
    },
  ]);

  const handleClick = (projectInfo) => {
    setProjectData(projectInfo);
    setIsinfotab(true);
  };
  return (
    <div className="organization--hero">
      <BrowserRouter>
        <div className="main-page-hero-organization">
          <div className="sidenav">
            <SideNav className="side_nav" />
          </div>
          <div className="org-main-hero">
            <div className="top-nav-org-hero">
              <AutoComplete
                style={{
                  width: "30rem",
                }}
                options={options}
                placeholder="Search for Projects"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                variant="filled"
              />
              {/* <Input
                placeholder="Search for projects"
                variant="filled"
                style={{
                  padding: "0.5rem 2rem",
                  width: "30rem",
                }}
              /> */}
              <div className="side-settings">
                <div className="padThis">
                  <NotificationsActiveOutlinedIcon
                    style={{
                      fontSize: "1.125rem",
                    }}
                  />
                </div>
                <Button
                  color="default"
                  variant="solid"
                  onClick={() => setIsmodal(true)}
                >
                  <CallToActionOutlinedIcon
                    style={{
                      fontSize: "small",
                    }}
                  />{" "}
                  Call for Proposals
                </Button>
              </div>
            </div>
            <div className="proposal-status-hero">
              <Button type="text">
                <WatchLaterOutlinedIcon
                  style={{
                    fontSize: "small",
                  }}
                />{" "}
                Pending Review <Badge count={11} showZero color="#faad14" />
              </Button>
              <Button type="text">
                <UnsubscribeOutlinedIcon
                  style={{
                    fontSize: "small",
                  }}
                />{" "}
                Unsubmitted <Badge count={25} />
              </Button>
              <Button type="text">
                <CheckBoxOutlinedIcon
                  style={{
                    fontSize: "small",
                  }}
                />{" "}
                Approved
                <Badge
                  className="site-badge-count-109"
                  count={109}
                  style={{
                    backgroundColor: "#52c41a",
                  }}
                />
              </Button>
            </div>
            <ProjectComp handleClick={handleClick} />
            <div className="explore-projects-org-dash">
              <span>Explore your users' top projects</span>
            </div>
          </div>
        </div>
        <Modal open={isModal} footer="" onCancel={() => setIsmodal(false)}>
          <Call />
        </Modal>
        <Modal open={isInfotab} footer="" onCancel={() => setIsinfotab(false)}>
          <ProjectSubmissionCard infoProject={projectData} info={isInfotab} />
        </Modal>
      </BrowserRouter>
    </div>
  );
}
