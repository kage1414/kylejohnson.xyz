import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';
import type { ApplicationsAttributes } from '@/types';

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
          {applicationData.map(
            ({ name, technologies, url, descriptions }, idx) => {
              console.log({ name, technologies, url, descriptions });
              return (
                <Box key={name + idx}>
                  <FullPost body={descriptions} title={name} url={url} />
                </Box>
              );
            }
          )}
        </Box>
      )}
    </>
  );
}
