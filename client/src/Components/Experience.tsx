import React, { FC, ReactElement, useEffect, useState } from 'react';
import FullPost from './FullPost';
import axios from 'axios';

const Experience: FC = (): ReactElement => {

  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    axios.get('/data/experience')
      .then((response) => {
        setExperienceData(response.data);
      });
  }, []);

  return (
    < div style={{
      display: 'flex',
      alignContent: 'flex-start',
      flexFlow: 'row wrap'
    }}>
      {
        experienceData.map(({ employer, description, position, time }, idx: number) => (
          <FullPost
            key={employer + position + idx}
            title={position}
            subtitle={employer}
            time={time}
            body={description} />
        ))
      }
    </div >
  );
};



export default Experience;
