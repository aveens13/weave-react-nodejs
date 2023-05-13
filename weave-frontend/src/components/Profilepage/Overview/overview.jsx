import React from 'react';
import './overview.css';
import ProjectBox from './projectBox/projectBox';
import Piechart from './piechart/piechart';
import { BsListCheck } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import project from '../../../assets/project.png';
import { Pie } from '@nivo/pie';

const data = {
  completedProjects: 5,
  completedTasks: 10,
  languages: ['javascript', 'css', 'html', 'hulu'],
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
        <div className='statistics'>
          <div className='highlight-box'>
            <FaUniversity className='statistics-icons' />
            <div>
              <h3>Kathmandu University</h3>
              <h2>Student</h2>
            </div>
          </div>
          <div className='highlight-box'>
            <img
              className='project-image-icon'
              src={project}
              alt='project-icon'
            />
            <div>
              <h3> Completed Projects</h3>
              <h2>5</h2>
            </div>
          </div>
          <div className='highlight-box'>
            <BsListCheck className='statistics-icons' />
            <div>
              <h3>Task Completed</h3>
              <h2>5</h2>
            </div>
          </div>
        </div>

        <div className='languages'>
          <h3>Languages</h3>
          <div className='chart-container'>
            <Piechart className='chart' />{' '}
          </div>
        </div>
      </div>
      <div className='pinned-projects-container'>
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
