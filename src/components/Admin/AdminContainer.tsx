import { Grid } from '@mui/material';
import Router from 'next/router';
import { ReactElement, useEffect } from 'react';

import {
  EditApplicationContainer,
  EditEducationContainer,
  EditExperienceContainer,
  EditTechnicalSkillsContainer,
} from '.';
import { ComponentProps } from '../HomePage';

export function AdminContainer({
  selectedTab,
  user,
  loadingUser,
}: ComponentProps): ReactElement {
  useEffect(() => {
    if (!loadingUser && !user) Router.replace('/login');
  }, [user, loadingUser]);

  return (
    <Grid container wrap='nowrap'>
      {user?.username && (
        <>
          <EditExperienceContainer display={selectedTab === 0} />
          <EditTechnicalSkillsContainer display={selectedTab === 1} />
          <EditApplicationContainer display={selectedTab === 2} />
          <EditEducationContainer display={selectedTab === 3} />
        </>
      )}
    </Grid>
  );
}
