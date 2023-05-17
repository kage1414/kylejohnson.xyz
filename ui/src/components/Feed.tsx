import { Grid } from '@mui/material';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

import {
  ApplicationJSON,
  EducationJSON,
  ExperienceJSON,
  TechStackJSON,
} from 'apiTypes';

import { Applications, Education, Experience, TechnicalSkills } from './Pages';

interface Props {
  selectedTab: number;
}

export function Feed({ selectedTab }: Props): ReactElement {
  const [ApplicationJSON, setApplicationJSON] = useState<ApplicationJSON[]>([]);
  const [EducationJSON, setEducationJSON] = useState<EducationJSON[]>([]);
  const [ExperienceJSON, setExperienceJSON] = useState<ExperienceJSON[]>([]);
  const [TechnologyJSON, setTechnologyJSON] = useState<TechStackJSON[]>([]);

  const fetchApplicationJSON = () => {
    axios
      .get('/api/applications')
      .then(({ data }: { data: ApplicationJSON[] }) => {
        if (data) {
          setApplicationJSON(data.filter((ele) => !!ele.active) || []);
        }
      });
  };

  const fetchEducationJSON = () => {
    axios.get('/api/educations').then(({ data }: { data: EducationJSON[] }) => {
      if (data) {
        setEducationJSON(data.filter((ele) => !!ele.active) || []);
      }
    });
  };

  const fetchTechnologyJSON = () => {
    axios
      .get('/api/technical_skills')
      .then(({ data }: { data: TechStackJSON[] }) => {
        if (data) {
          setTechnologyJSON(data);
        }
      });
  };

  const fetchExperienceJSON = () => {
    axios
      .get('/api/experience')
      .then(({ data }: { data: ExperienceJSON[] }) => {
        console.log({ data });
        if (data) {
          setExperienceJSON(data.filter((ele) => !!ele.active) || []);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchApplicationJSON();
    fetchEducationJSON();
    fetchExperienceJSON();
    fetchTechnologyJSON();
  }, []);
  return (
    <Grid container wrap='nowrap' marginBottom={10}>
      <Grid item>
        <Experience data={ExperienceJSON} display={selectedTab === 0} />
        <TechnicalSkills
          TechnologyJSON={TechnologyJSON}
          display={selectedTab === 1}
        />
        <Applications data={ApplicationJSON} display={selectedTab === 2} />
        <Education data={EducationJSON} display={selectedTab === 3} />
      </Grid>
    </Grid>
  );
}
