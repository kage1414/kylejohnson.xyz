import { Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';

export function NoMatch(): ReactElement {
  return (
    <Grid>
      <Typography>Not Found</Typography>
    </Grid>
  );
}
