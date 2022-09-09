import React, { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import FullPost from '../FullPost';

type dataElement = {
  description: Array<string>;
  name: string;
  technologies: Array<string>;
  url: string;
};

export const Applications: FC = (): ReactElement => {
  const [data, setData] = useState<Array<dataElement>>([]);

  useEffect(() => {
    axios.get('/applications').then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div
      style={{
        marginLeft: '15px',
        display: 'flex',
        alignContent: 'flex-start',
        flexFlow: 'row wrap',
      }}
    >
      {data.map(({ name, technologies, url, description }, idx) => {
        const body = [...description, 'Technologies used:', ...technologies];
        return (
          <div key={name + idx}>
            <FullPost body={body} title={name} url={url} />
          </div>
        );
      })}
    </div>
  );
};
