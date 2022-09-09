import React, { FC, ReactElement, useState, useEffect } from 'react';
import { AppBar, Tabs, Container } from '@mui/material';
import Sidebar from './Sidebar';
import axios from 'axios';

interface IProps {
  selectedTab: { name: string; display: boolean };
  windowWidth?: number;
  mobile?: boolean;
  displaySidebar: boolean;
}

const Body: FC<IProps> = ({ selectedTab, displaySidebar }): ReactElement => {
  const [applicationData, setApplicationData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [technicalSkillsData, setTechnicalSkillsData] = useState([]);

  useEffect(() => {
    axios.get('/applications').then((response) => {
      setApplicationData(response.data);
    });

    axios.get('/education').then((response) => {
      setEducationData(response.data);
    });

    axios.get('/experience').then((response) => {
      setExperienceData(response.data);
    });

    axios.get('/technical_skills').then((response) => {
      setTechnicalSkillsData(response.data);
    });
  }, []);

  return (
    <Container
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {displaySidebar && (
        <div
          style={{
            flexBasis: '100px',
            flexGrow: 1,
          }}
        >
          <Sidebar />
        </div>
      )}
    </Container>
  );
};

export default Body;
