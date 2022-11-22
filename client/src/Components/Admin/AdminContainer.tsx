import { ReactElement } from 'react';
import { Grid } from '@mui/material';
interface Props {
  selectedTab: number;
}

import { EditExperienceContainer } from './EditExperienceContainer';

export function AdminContainer({ selectedTab }: Props): ReactElement {
  return (
    <Grid container wrap='nowrap'>
      <EditExperienceContainer />
    </Grid>
  );
}
