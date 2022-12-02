import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';
import { Application } from './Application';

export type ApplicationData = any;

type Props = {
  applicationData: ApplicationData;
  display: boolean;
};

export function Applications({
  applicationData,
  display,
}: Props): ReactElement {
  console.log({ applicationData });
  return (
    <>
      {display && (
        <Box>
          {applicationData.map((data: any) => {
            return <Application data={data} />;
          })}
        </Box>
      )}
    </>
  );
}
