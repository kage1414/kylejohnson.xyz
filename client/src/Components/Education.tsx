import React, { FC, ReactElement, useState, useEffect } from 'react';
import FullPost from './FullPost';
import axios from 'axios';

const Education: FC = (): ReactElement => {

  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    axios.get('/data/education')
      .then((response) => {
        setEducationData(response.data);
      });
  }, []);

  return (
    <div style={{
      marginLeft: '15px',
      display: 'flex',
      alignContent: 'flex-start',
      flexFlow: 'row wrap'
    }}>
      {educationData.map(({ school, time, certificate, degree }, idx: number) => (
        <FullPost title={school}
          subtitle={certificate || degree}
          time={time}
          key={school + idx} />
      ))}
    </div>
  );
};

export default Education;
