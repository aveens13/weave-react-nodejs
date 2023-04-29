import icon from "../assets/user-solid.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navBar">
      <div className="nav-elements">
        <h1>Weave</h1>
        {/* <div className='searchTop'><input type="text" placeholder='Search'/></div> */}
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/explore">
            <li>Explore</li>
          </Link>
          <Link to="/projects">
            <li>My Projects</li>
          </Link>
          <li>
            <i className="fa fa-user"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}
