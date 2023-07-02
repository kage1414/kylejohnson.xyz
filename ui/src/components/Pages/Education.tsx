import { Box } from '@mui/material';
import { EducationJSON } from 'apiTypes';
import { ReactElement } from 'react';

import { FullPost } from '../FullPost';

type Props = {
  data: EducationJSON[];
  display: boolean;
};

export function Education({ data, display }: Props): ReactElement {
  return (
    <>
      {display && (
        <Box>
          {data &&
            data.map(({ id, school, time, certificate, degree }) => (
              <FullPost
                title={school}
                subtitles={[degree, certificate]}
                time={time}
                key={id}
              />
            ))}
        </Box>
      )}
    </>
  );
}
