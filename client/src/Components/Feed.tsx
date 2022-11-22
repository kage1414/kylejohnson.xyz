import { ReactElement, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { Applications, Education, Experience, TechnicalSkills } from './Pages';
import type {
  ApplicationData,
  EducationData,
  TechnicalSkillsData,
  ExperienceData,
} from './Pages';

const BASE_URL = 'http://localhost:3000';

interface Props {
  selectedTab: number;
}

export function Feed({ selectedTab }: Props): ReactElement {
  const [applicationData, setApplicationData] = useState<ApplicationData>([]);
  const [educationData, setEducationData] = useState<EducationData>([]);
  const [experienceData, setExperienceData] = useState<ExperienceData>([]);
  const [technicalSkillsData, setTechnicalSkillsData] =
    useState<TechnicalSkillsData>([]);

  const fetchApplicationData = () => {
    axios.get(BASE_URL + '/api/applications').then(({ data }) => {
      setApplicationData(data);
    });
  };

  const fetchEducationData = () => {
    axios.get(BASE_URL + '/api/education').then(({ data }) => {
      setEducationData(data);
    });
  };

  const fetchTechnicalSkillsData = () => {
    axios.get(BASE_URL + '/api/technical_skills').then(({ data }) => {
      setTechnicalSkillsData(data);
    });
  };

  const fetchExperienceData = () => {
    axios.get(BASE_URL + '/api/experience').then(({ data }) => {
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
    <Grid container wrap='nowrap'>
      <Grid item>{/* <Sidebar /> */}</Grid>
      <Grid item>
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
}
