import React, { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import FullPost from '../FullPost';

export const Experience: FC = (): ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/experience').then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'flex-start',
        flexFlow: 'row wrap',
      }}
    >
      {data.map(({ employer, description, position, time }, idx: number) => (
        <FullPost
          key={employer + position + idx}
          title={position}
          subtitle={employer}
          time={time}
          body={description}
        />
      ))}
    </div>
  );
};
