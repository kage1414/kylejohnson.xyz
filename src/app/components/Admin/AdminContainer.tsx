import { ReactElement, useState } from 'react';
import { Grid } from '@mui/material';
interface Props {
  selectedTab: number;
}

import { EditExperienceContainer, EditTechnicalSkillsContainer } from '.';

export function AdminContainer({ selectedTab }: Props): ReactElement {
  return (
    <Grid container wrap='nowrap'>
      <EditExperienceContainer display={selectedTab === 0} />
      <EditTechnicalSkillsContainer display={selectedTab === 1} />
    </Grid>
  );
}
