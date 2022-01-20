import React, { FC, ReactElement } from 'react';
import FullPost from './FullPost';

type ApplicationDataElement = {
  description: Array<string>;
  name: string;
  technologies: Array<string>;
  url: string;
}

type IProps = {
  applicationData: Array<ApplicationDataElement>;
}


const Applications: FC<IProps> = ({ applicationData }): ReactElement => {

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
