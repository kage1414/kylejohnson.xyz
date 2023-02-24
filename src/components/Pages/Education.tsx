import { Box } from '@mui/material';
import { ReactElement } from 'react';

import { Education as EducationData } from 'dbschema/interfaces';

import { FullPost } from '../FullPost';

type Props = {
  data: EducationData[];
  display: boolean;
};

export function Education({ data, display }: Props): ReactElement {
  return (
    <>
      {display && (
        <Box>
          {data &&
            data.map(
              ({ id, school, time, certificate, degree }, idx: number) => (
                <FullPost
                  title={school}
                  subtitles={[degree, certificate]}
                  time={time}
                  key={id}
                />
              )
            )}
        </Box>
      )}
    </>
  );
}
