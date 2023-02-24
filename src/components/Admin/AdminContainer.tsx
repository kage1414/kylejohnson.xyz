import { Grid } from '@mui/material';
import { ReactElement } from 'react';

import {
  EditApplicationContainer,
  EditEducationContainer,
  EditExperienceContainer,
  EditTechnicalSkillsContainer,
} from '.';

interface Props {
  selectedTab: number;
}

export function AdminContainer({ selectedTab }: Props): ReactElement {
  return (
    <Grid container wrap='nowrap'>
      <EditExperienceContainer display={selectedTab === 0} />
      <EditTechnicalSkillsContainer display={selectedTab === 1} />
      <EditApplicationContainer display={selectedTab === 2} />
      <EditEducationContainer display={selectedTab === 3} />
    </Grid>
  );
}
