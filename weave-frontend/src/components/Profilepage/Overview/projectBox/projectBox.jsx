import React from 'react';
import './projectBox.css';

const projectBox = () => {
  return (
    <>
      <div className='projectBox-container'>
        <h3 className='project-tag'>React</h3>
        <div className='project-title-container'>
          <h2 className='project-title'>Weave</h2>
        </div>
        <ul className='language-tags'>
          <li>
            {' '}
            <span> javascript</span>{' '}
          </li>
          <li>
            {' '}
            <span>html/css</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default projectBox;
