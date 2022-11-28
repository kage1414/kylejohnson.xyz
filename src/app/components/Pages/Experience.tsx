import { ReactElement } from 'react';
import { FullPost } from '../FullPost';
import { Box } from '@mui/material';
import type { Descriptions } from '../FullPost/FullPostBody';

export type Experience = {
  employer: string;
  position: string;
  Descriptions: Descriptions;
  time: string;
  id: string;
};

export type ExperienceData = Array<Experience>;

type Props = {
  experienceData: ExperienceData;
  display: boolean;
};

export function Experience({ experienceData, display }: Props): ReactElement {
  return (
    <>
      {display && (
        <Box>
          {experienceData.map(
            ({ employer, Descriptions, position, time, id }) => {
              return (
                <FullPost
                  key={id}
                  title={position}
                  subtitle={employer}
                  time={time}
                  body={Descriptions}
                />
              );
            }
          )}
        </Box>
      )}
    </>
  );
}
