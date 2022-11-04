import { FC, ReactElement, useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import { Applications, Education, Experience, TechnicalSkills } from './pages';
import type {
  ApplicationData,
  EducationData,
  TechnicalSkillsData,
  ExperienceData,
} from './pages';
import { Sidebar } from './Sidebar';

interface IProps {
  selectedTab: number;
  displaySidebar: boolean;
}

export const Feed: FC<IProps> = ({
  selectedTab,
  displaySidebar,
}): ReactElement => {
  const [applicationData, setApplicationData] = useState<ApplicationData>([]);
  const [educationData, setEducationData] = useState<EducationData>([]);
  const [experienceData, setExperienceData] = useState<ExperienceData>([]);
  const [technicalSkillsData, setTechnicalSkillsData] =
    useState<TechnicalSkillsData>([]);

  const fetchApplicationData = () => {
    axios.get('/applications').then(({ data }) => {
      setApplicationData(data);
    });
  };

  const fetchEducationData = () => {
    axios.get('/education').then(({ data }) => {
      setEducationData(data);
    });
  };

  const fetchTechnicalSkillsData = () => {
    axios.get('/technical_skills').then(({ data }) => {
      setTechnicalSkillsData(data);
    });
  };

  const fetchExperienceData = () => {
    axios.get('/experience').then(({ data }) => {
      setExperienceData(data);
    });
  };

  useEffect(() => {
    fetchApplicationData();
    fetchEducationData();
    fetchExperienceData();
    fetchTechnicalSkillsData();
  }, []);
  return (
    <Grid container>
      {displaySidebar && (
        <Grid xs={2}>
          <Sidebar />
        </Grid>
      )}
      <Grid item xs={displaySidebar ? 10 : 12}>
        <Experience
          experienceData={experienceData}
          display={selectedTab === 0}
        />
        <TechnicalSkills
          technicalSkillsData={technicalSkillsData}
          display={selectedTab === 1}
        />
        <Applications
          applicationData={applicationData}
          display={selectedTab === 2}
        />
        <Education educationData={educationData} display={selectedTab === 3} />
      </Grid>
    </Grid>
  );
};
