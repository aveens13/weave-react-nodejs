import React from 'react';
import './overview.css';
import ProjectBox from './projectBox/projectBox';

const data = {
  completedProjects: 5,
  completedTasks: 10,
  languages: ['javascript', 'css', 'html'],
};

const data1 = {
  projectTag: 'React',
  projectTitle: 'Weave',
  language: ['javascript'],
};

const overview = () => {
  return (
    <div className='overview-container'>
      <div className='highlights-container'>
        <h2 className='title-text-highlights'>Statistics</h2>
        <div className='highlights'>
          <div className='highlight-box'>
            <h3>Completed Projects</h3>
            <h3>5</h3>
          </div>
          <div className='highlight-box'>
            <h3>Completed Tasks</h3>
            <h3>10</h3>
          </div>
          <div className='languages'>
            <h3>Languages</h3>
            <ul>
              {data.languages.map((language) => {
                return <li>{language}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='pinned-projects-container'>
        <h2 className='title-text-pinned-projects'>Pinned Projects</h2>
        <div className='pinned-projects'>
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </div>
    </div>
  );
};

export default overview;
