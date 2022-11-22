import { ReactElement } from 'react';
import { FullPost } from '../FullPost';
import { Box } from '@mui/material';

export type Experience = {
  employer: string;
  position: string;
  description: Array<string>;
  time: string;
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
            ({ employer, description, position, time }, idx: number) => (
              <FullPost
                key={employer + position + idx}
                title={position}
                subtitle={employer}
                time={time}
                body={description}
              />
            )
          )}
        </Box>
      )}
    </>
  );
}
