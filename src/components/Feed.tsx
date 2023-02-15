import { ReactElement, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { Applications, Education, Experience, TechnicalSkills } from './Pages';
import type {
  Application as ApplicationData,
  Education as EducationData,
  Experience as ExperienceData,
  TechStack as TechnicalSkillsData,
} from 'dbschema/interfaces';

const BASE_URL = 'http://localhost:3000';

interface Props {
  selectedTab: number;
}

export function Feed({ selectedTab }: Props): ReactElement {
  const [applicationData, setApplicationData] = useState<ApplicationData[]>([]);
  const [educationData, setEducationData] = useState<EducationData[]>([]);
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
  const [technicalSkillsData, setTechnicalSkillsData] = useState<
    TechnicalSkillsData[]
  >([]);

  const fetchApplicationData = () => { 
    axios
      .get('/api/applications')
      .then(({ data }: { data: ApplicationData[] }) => {
        setApplicationData(data.filter((ele) => !!ele.active) || []);
      });
  };

  const fetchEducationData = () => {
    axios
      .get('/api/education')
      .then(({ data }: { data: EducationData[] }) => {
        setEducationData(data.filter((ele) => !!ele.active) || []);
      });
  };

  const fetchTechnicalSkillsData = () => {
    axios.get('/api/technical_skills').then(({ data }) => {
      setTechnicalSkillsData(data || []);
    }); 
  };

  const fetchExperienceData = () => {
    axios
      .get('/api/experience')
      .then(({ data }: { data: ExperienceData[] }) => {
        setExperienceData(data.filter((ele) => !!ele.active) || []);
      }).catch((err) => {
        console.log('here', {err})
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
      <Grid item>
        <Experience data={experienceData} display={selectedTab === 0} />
        <TechnicalSkills
          technicalSkillsData={technicalSkillsData}
          display={selectedTab === 1}
        />
        <Applications data={applicationData} display={selectedTab === 2} />
        <Education data={educationData} display={selectedTab === 3} />
      </Grid>
    </Grid>
  );
}
