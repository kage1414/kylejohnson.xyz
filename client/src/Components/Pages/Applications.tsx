import React, { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import FullPost from '../FullPost';

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
      <div
        style={{
          marginLeft: '15px',
          display: 'flex',
          alignContent: 'flex-start',
          flexFlow: 'row wrap',
        }}
      >
        {applicationData.map(
          ({ name, technologies, url, description }, idx) => {
            const body = [
              ...description,
              'Technologies used:',
              ...technologies,
            ];
            return (
              <div key={name + idx}>
                <FullPost body={body} title={name} url={url} />
              </div>
            );
          }
        )}
      </div>
    )}
  </>
);
