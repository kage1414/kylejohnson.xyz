import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';
import { Application } from './Application';
import { ApplicationModel } from '@/server/db/sequelize/sequelize';

export type ApplicationData = ApplicationModel[];

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
