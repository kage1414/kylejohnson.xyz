import React, { FC, ReactElement } from 'react';

interface IProps {
  selectedTab: { name: string; display: boolean; };
}

const Body: FC<IProps> = ({selectedTab}): ReactElement => {

  return (
    <div>
      {selectedTab.name === 'technical skills' &&
      <span>Technical Skills</span>
      }
      {selectedTab.name === 'projects' &&
      <span>Projects</span>
      }
      {selectedTab.name === 'experience' &&
      <span>Experience</span>
      }
      {selectedTab.name === 'education' &&
      <span>Education</span>
      }
      {selectedTab.name === 'general' &&
      <span>General</span>
      }
    </div>
  )

}

export default Body