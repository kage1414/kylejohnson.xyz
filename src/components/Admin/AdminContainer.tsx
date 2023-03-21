import { Grid } from '@mui/material';
import Router from 'next/router';
import { ReactElement, useEffect } from 'react';

import { useUser } from '@/lib/hooks';

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
  const [user, { loading }] = useUser();

  useEffect(() => {
    // redirect user to login if not authenticated
    console.log({ user });
    if (!loading && !user) Router.replace('/login');
  }, [user, loading]);

  return (
    <Grid container wrap='nowrap'>
      {user && (
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
