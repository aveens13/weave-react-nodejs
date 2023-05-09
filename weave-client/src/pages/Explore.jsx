import { Star, StarOutline, GitHub } from "@mui/icons-material";
import "./Explore.css";
export default function ExplorePage() {
  return (
    <div className="explore-section-hero">
      <ul className="title-list">
        <li>
          <Star />
        </li>
        <li>Project Title</li>
        <li>Tags</li>
        <li>Members</li>
        <li>Supervisor</li>
      </ul>
      <hr />
      <ul className="data-list">
        <li>
          <StarOutline />
          <GitHub />
        </li>
        <li>Weave</li>
        <li>nodejs,python</li>
        <li>
          <ul>
            <li>Krishna</li>
            <li>Sulav</li>
            <li>Ankit</li>
          </ul>
        </li>
        <li>Mr. Rabindra Bista</li>
      </ul>
    </div>
  );
}
