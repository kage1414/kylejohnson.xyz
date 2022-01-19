import React, { FC, ReactElement, useState, useEffect } from 'react';
import TechnicalSkills from './TechnicalSkills';
import Applications from './Applications';
import Sidebar from './Sidebar';
import Experience from './Experience';
import Education from './Education';
import axios from 'axios';

interface IProps {
  selectedTab: { name: string; display: boolean; };
  windowWidth?: number;
  mobile?: boolean;
}

const Body: FC<IProps> = ({ selectedTab }): ReactElement => {

  const [applicationData, setApplicationData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [technicalSkillsData, setTechnicalSkillsData] = useState([]);

  useEffect(() => {
    axios.get('/applications')
      .then((response) => {
        setApplicationData(response.data);
      });

    axios.get('/education')
      .then((response) => {
        setEducationData(response.data);
      });

    axios.get('/experience')
      .then((response) => {
        setExperienceData(response.data);
      });

    axios.get('/technical_skills')
      .then((response) => {
        setTechnicalSkillsData(response.data);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      <div style={{
        flexBasis: '100px',
        flexGrow: 1
      }}>
        <Sidebar />
      </div>
      <div style={{
        flexBasis: '0',
        flexGrow: 999
      }}>
        {selectedTab.name === 'technical_skills' &&
          <TechnicalSkills technicalSkillsData={technicalSkillsData} />
        }
        {selectedTab.name === 'applications' &&
          <Applications applicationData={applicationData} />
        }
        {selectedTab.name === 'experience' &&
          <Experience experienceData={experienceData} />
        }
        {selectedTab.name === 'education' &&
          <Education educationData={educationData} />
        }
      </div>
      {/* <BottomBar/> */}
    </div>
  );

};

export default Body;
