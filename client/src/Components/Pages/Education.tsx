import React, { FC, ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import FullPost from '../FullPost';

interface IProps {
  data: Array<any>;
}

export const Education: FC = (): ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/education').then((response) => {
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
      {data.map(({ school, time, certificate, degree }, idx: number) => (
        <FullPost
          title={school}
          subtitle={certificate || degree}
          time={time}
          key={school + idx}
        />
      ))}
    </div>
  );
};
