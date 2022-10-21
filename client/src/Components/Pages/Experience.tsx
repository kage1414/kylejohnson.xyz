import React, { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import FullPost from '../FullPost';
import { Box } from '@mui/material';

type Experience = {
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

export const Experience: FC<Props> = ({
  experienceData,
  display,
}): ReactElement => (
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
