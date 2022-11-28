import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';
import type { ApplicationsAttributes } from '@/types';
import { Application } from './Application';

export type ApplicationData = Array<ApplicationsAttributes>;

type Props = {
  applicationData: ApplicationData;
  display: boolean;
};

export function Applications({
  applicationData,
  display,
}: Props): ReactElement {
  return (
    <>
      {display && (
        <Box>
          {applicationData.map((data) => {
            return <Application data={data} />;
          })}
        </Box>
      )}
    </>
  );
}
