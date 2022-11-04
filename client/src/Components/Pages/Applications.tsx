import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import FullPost from '../FullPost/FullPost';

type Application = {
  description: Array<string>;
  name: string;
  technologies: Array<string>;
  url: string;
};

export type ApplicationData = Array<Application>;

type Props = {
  applicationData: ApplicationData;
  display: boolean;
};

export const Applications: FC<Props> = ({
  applicationData,
  display,
}): ReactElement => (
  <>
    {display && (
      <Box>
        {applicationData.map(
          ({ name, technologies, url, description }, idx) => {
            const body = [
              ...description,
              'Technologies used:',
              ...technologies,
            ];
            return (
              <Box key={name + idx}>
                <FullPost body={body} title={name} url={url} />
              </Box>
            );
          }
        )}
      </Box>
    )}
  </>
);
