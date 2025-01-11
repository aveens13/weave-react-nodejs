import React, { useState } from 'react';
import './Explore.css';
import image from '../../assets/image.jpg';
import SearchBar from './SearchBar/SearchBar';
import ProjectCard from './ProjectCard/ProjectCard';

export default function ExplorePage() {
  const [projects, setProjects] = useState([
    {
      projectId: 1,
      projectTitle: 'AI-Powered Chatbot',
      tags: ['AI', 'Chatbot'],
      languages: ['Python', 'JavaScript'],
      members: [{ name: 'Alice' }, { name: 'Bob' }],
    },
    {
      projectId: 2,
      projectTitle: 'E-Commerce Platform',
      tags: ['Web', 'E-Commerce'],
      languages: ['React', 'Node.js'],
      members: [{ name: 'Charlie' }, { name: 'Dave' }],
    },
    {
      projectId: 3,
      projectTitle: 'Data Visualization Tool',
      tags: ['Data Science', 'Visualization'],
      languages: ['D3.js', 'Python'],
      members: [{ name: 'Eve' }, { name: 'Frank' }],
    },
    {
      projectId: 4,
      projectTitle: 'Mobile Fitness App',
      tags: ['Mobile', 'Fitness'],
      languages: ['Flutter', 'Dart'],
      members: [{ name: 'Grace' }, { name: 'Hank' }],
    },
    {
      projectId: 5,
      projectTitle: 'E-Commerce Platform',
      tags: ['Web', 'E-Commerce'],
      languages: ['React', 'Node.js'],
      members: [{ name: 'Charlie' }, { name: 'Dave' }],
    },
  ]);

  function handleClick(id) {
    console.log(`Project clicked: ${id}`);
  }

  return (
    <div className='explore-container'>
      <div className='explore-section-hero'>
        <h3 className='explore-title'>Explore Projects</h3>
        <p className='explore-subtitle'>
          Discover innovative projects created by talented developers and
          students.
        </p>
        <SearchBar />
      </div>
      <div className='projects-section'>
        <h4 className='projects-heading'>Computer Science Projects</h4>
        <div className='projects-grid'>
          {projects.map((p) => (
            <ProjectCard
              key={p.projectId}
              tags={p.tags}
              languages={p.languages}
              title={p.projectTitle}
              authors={p.members.map((member) => member.name)}
              posterUrl={image} // Replace with dynamic poster URL if available
              onClick={() => handleClick(p.projectId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
