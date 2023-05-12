import Logo from "../assets/weave-logo.png";
import Kvothe from "../assets/profile.jpeg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  TaskAltOutlined,
  ExploreOutlined,
  InboxOutlined,
  LogoutOutlined,
  MenuOutlined,
  Circle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { useContext } from "react";
import { UserContext } from "../App";

function SideNav() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="main_box">
      <div className="logo">
        <img src={Logo} id="logo"></img>
        <span className="text">Weave</span>
      </div>
      <div className="inline_text">Menu</div>
      <div className="static_options">
        <Link to="/" className="static_option">
          <div className="icon_text">
            <HomeOutlinedIcon className="icon" fontSize="medium" />
            <span>Home</span>
          </div>
        </Link>
        <a href="#" className="static_option">
          <div className="icon_text">
            <TaskAltOutlined className="icon" />
            <span>Tasks</span>
          </div>
        </a>
        <Link to="/explore" className="static_option">
          <div className="icon_text">
            <ExploreOutlined className="icon" />
            <span>Explore</span>
          </div>
        </Link>
        <a href="#" className="static_option">
          <div className="icon_text">
            <InboxOutlined className="icon" />
            <span>Inbox</span>
          </div>
        </a>
      </div>

      <div className="inline_text">Pinned</div>
      <div className="dynamic_options">
        <a href="#" className="dynamic_option">
          {/* <div className="icon_text">
                    <Circle className="icon_1" fontSize="small"/>Weave
                    </div>
                    </a>
                <a href="#" className="dynamic_option"> 
                    <div className="icon_text">
                <Circle className="icon_1"/>Notion
                    </div>
                </a>
                <a href="#" className="dynamic_option"> 
                    <div className="icon_text">
                        <Circle className="icon_1"/>Sitcoin
                    </div>
                </a>
                <a href="#" className="dynamic_option"> 
                    <div className="icon_text">
                        <Circle className="icon_1"/>Discord
                    </div> 
                </a>
                <a href="#" className="dynamic_option">
                    <div className="icon_text">
                         <Circle className="icon_1"/>Database Design
                    </div> */}
        </a>
      </div>
      <div style={{ borderTop: "1px solid #000000" }}></div>
      <div className="profile">
        <div className="image">
          <img src={Kvothe} id="pp"></img>
        </div>
        <div className="info">
          <p>{user.data.name}</p>
          <p className="userEmail">{user.data.email}</p>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
