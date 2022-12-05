import { ReactElement } from 'react';
import { FullPost } from '../FullPost';
import { Box } from '@mui/material';
import type { Experience as ExperienceData } from 'dbTypes';

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
                  subtitles={employer}
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
