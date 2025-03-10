import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import "./ProjectCard.css";
import React from "react";

const ProjectCard = ({
  tags = ["Web", "Portfolio"],
  languages = ["HTML", "CSS", "JavaScript"],
  title = "Untitled Project",
  authors = [{ name: "John" }],
  posterUrl = [
    "../../../public/2.jpg",
    "../../../public/3.jpg",
    "../../../public/4.avif",
    "../../../public/5.jpg",
    "../../../public/6.avif",
    "../../../public/7.avif",
    "../../../public/8.avif",
    "../../../public/9.avif",
    "../../../public/10.avif",
    "../../../public/11.avif",
    "../../../public/12.avif",
    "../../../public/13.avif",
    "../../../public/14.avif",
  ],

  onLikeToggle,
  liked = false,
  likeCount = 0,
  showLike = true,
  pinned = false,

  onPinToggle,
  handleClick,
  projectId,
}) => {
  const randomNum = Math.floor(Math.random() * 12);
  return (
    <div className="project-card">
      <div
        className="project-poster"
        style={{
          backgroundImage: `url(${posterUrl[randomNum]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {tags && (
          <div className="tags-krishna">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Pin icon added to the top-right corner */}
        {!showLike && (
          <div className="pin-icon" onClick={onPinToggle}>
            {pinned ? (
              <PushPinIcon className="pin-icon-style pinned" />
            ) : (
              <PushPinOutlinedIcon className="pin-icon-style" />
            )}
          </div>
        )}
      </div>
      <div
        className="project-info-krishna"
        onClick={() => handleClick(projectId)}
      >
        <p className="languages-krishna-main">{languages.join(", ")}</p>
        <h3 className="project-title">{title}</h3>
        <p className="authors">
          {authors.length > 1
            ? `By ${authors.slice(0, -1).join(", ")} and ${authors.slice(-1)}`
            : `By ${authors[0]}`}
        </p>
        {/* Conditionally rendering the like section */}
        {showLike && (
          <div className="like-section" onClick={onLikeToggle}>
            {liked ? (
              <FavoriteIcon className="like-icon liked" />
            ) : (
              <FavoriteBorderIcon className="like-icon" />
            )}
            <span className="like-count">{likeCount} likes</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
