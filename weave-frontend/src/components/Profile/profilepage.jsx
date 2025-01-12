import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader/profile';
import Heatmap from './Heatmap/heatmap';
import './profilepage.css';
import { generateDummyData } from './Heatmap/heatmapdata'
import PopularRepoPage from './PopularRepositories/PopularRepositories'
import LanguageProgressBar from "./LanguageBar/LanguageProgressBar"; // Import the Language component
import initialLanguages from "./LanguageBar/data"; // Import the initial data

function Profile() {
  const dummyData = generateDummyData(); // Generate random contribution data
  const [languages, setLanguages] = useState(initialLanguages);


  return (
    <>
      
      <div className="profile-container">
        <ProfileHeader />
      </div>
      
        <div className="heatmap-language-container"> 
          <div class="heatmap-container">
            <h1>Contribution Heatmap</h1>
            <Heatmap data={dummyData} />
          </div>

          <div className='language-container'>
            <LanguageProgressBar languages={languages} />
          </div>
        </div>

        <div className="repo"> 
              <PopularRepoPage /> 
          </div>      
          
        
        
      
    </>
  );
}

export default Profile;