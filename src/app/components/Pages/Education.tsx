import { ReactElement } from 'react';
import { FullPost } from '../FullPost';
import { Box } from '@mui/material';
import { Education as EducationData } from 'dbTypes';

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
            data.map(({ school, time, certificate, degree }, idx: number) => (
              <FullPost
                title={school}
                subtitles={[degree, certificate]}
                time={time}
                key={school + idx}
              />
            ))}
        </Box>
      )}
    </>
  );
}
