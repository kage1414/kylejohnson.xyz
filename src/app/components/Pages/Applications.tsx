import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';
import type { Descriptions } from '../FullPost/FullPostBody';

type Application = {
  descriptions: Descriptions;
  name: string;
  technologies: Array<string>;
  url: string;
};

export type ApplicationData = Array<Application>;

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
