import { ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import { ExperienceData } from '../Pages';
import { BASE_URL } from '../../constants';
import { Box } from '@mui/material';
import { EditExperienceRow } from './EditExperienceRow';

export function EditExperience(): ReactElement {
  const [experience, setExperience] = useState<ExperienceData>([]);
  useEffect(() => {
    axios.get(BASE_URL + '/api/experience').then(({ data }) => {
      setExperience(data);
    });
  }, []);

  return (
    <Box>
      {experience.map((exp, i) => (
        <EditExperienceRow
          key={`${JSON.stringify(exp)} ${i}`}
          experience={exp}
        />
      ))}
    </Box>
  );
}
