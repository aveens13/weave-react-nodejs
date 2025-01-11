import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ProjectCard.css';
import React, { useState } from 'react';

const ProjectCard = ({ tags, languages, title, authors, posterUrl }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className='project-card'>
      <div
        className='project-poster'
        style={{
          backgroundImage: `url(${posterUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {tags && (
          <div className='tags-krishna'>
            {tags.map((tag, index) => (
              <span key={index} className='tag'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className='project-info-krishna'>
        <p className='languages-krishna-main'>{languages.join(', ')}</p>
        <h3 className='project-title'>{title}</h3>
        <p className='authors'>
          {authors.length > 1
            ? `By ${authors.slice(0, -1).join(', ')} and ${authors.slice(-1)}`
            : `By ${authors[0]}`}
        </p>
        <div className='like-section'>
          <FavoriteBorderIcon
            className={`like-icon ${liked ? 'liked' : ''}`}
            onClick={handleLike}
          />
          <span className='like-count'>{likeCount} likes</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
