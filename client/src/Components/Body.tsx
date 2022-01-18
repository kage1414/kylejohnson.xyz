import React, { FC, ReactElement } from 'react';
import { Data } from '../../../server/db.js';
import TechnicalSkills from './TechnicalSkills';
import Applications from './Applications';
import Sidebar from './Sidebar';
import Experience from './Experience';
import Education from './Education';

interface IProps {
  selectedTab: { name: string; display: boolean; };
}

const Body: FC<IProps> = ({ selectedTab }): ReactElement => {

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      <div style={{
        flexBasis: '100px',
        flexGrow: 1
      }}>
        <Sidebar />
      </div>
      <div style={{
        flexBasis: '0',
        flexGrow: 999
      }}>
        {selectedTab.name === 'technical skills' &&
          <TechnicalSkills Data={Data}
            selectedTab={selectedTab} />
        }
        {selectedTab.name === 'applications' &&
          <Applications Data={Data}
            selectedTab={selectedTab} />
        }
        {selectedTab.name === 'experience' &&
          <Experience Data={Data}
            selectedTab={selectedTab} />
        }
        {selectedTab.name === 'education' &&
          <Education Data={Data}
            selectedTab={selectedTab} />
        }
      </div>
    </div>
  );

};

export default Body;