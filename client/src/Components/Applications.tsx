import React, { FC, ReactElement, useState, useEffect } from 'react';
import FullPost from './FullPost';
import axios from 'axios';

// type ApplicationDataElement = {
//   description: Array<string>;
//   name: string;
//   technologies: Array<string>;
//   url: string;
// }

const Applications: FC = (): ReactElement => {

  const [applicationData, setApplicationData] = useState([]);

  useEffect(() => {
    axios.get('/data/applications')
      .then((response) => {
        setApplicationData(response.data);
      });
  }, []);

  return (
    <div style={{
      marginLeft: '15px',
      display: 'flex',
      alignContent: 'flex-start',
      flexFlow: 'row wrap'
    }}>
      {applicationData.map(({ name, technologies, url, description }, idx) => {

        const body = [...description, 'Technologies used:', ...technologies];
        return (
          <div key={name + idx} >
            <FullPost body={body}
              title={name}
              url={url}
            />
          </div>);
      }
      )}
    </div>
  );
};

export default Applications;
