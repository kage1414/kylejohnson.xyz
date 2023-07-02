import { Box } from '@mui/material';
import { ReactElement } from 'react';

import { Experience as ExperienceData } from 'dbschema/interfaces';

import { FullPost } from '../FullPost';

type Props = {
  data: ExperienceData[];
  display: boolean;
};

export function Experience({ data, display }: Props): ReactElement {
  return (
    <>
      {display && (
        <Box>
          {data &&
            data.map(({ employer, descriptions, position, time, id }) => {
              return (
                <FullPost
                  key={id}
                  title={position}
                  subtitles={employer ?? undefined}
                  time={time}
                  descriptions={descriptions}
                />
              );
            })}
        </Box>
      )}
    </>
  );
}
