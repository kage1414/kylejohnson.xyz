import React, { FC, ReactElement } from 'react';

interface IProps {
  tabs: Array<{ name: string; display: boolean; }>;
  switchTabs: any;
}

const Navbar: FC<IProps> = ({tabs, switchTabs}): ReactElement => {

  return (
    <div>
      <span>kyle johnson</span>
      <ul style={{display: 'inline-block'}} >
        {tabs.map((tab, idx) => {
          return <li onClick={switchTabs} style={{display: 'inline', margin: '5px'}} key={idx + tab.name}>{tab.name}</li>
          })}
      </ul>
    </div>

  )

}

export default Navbar