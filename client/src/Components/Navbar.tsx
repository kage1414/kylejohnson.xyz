import React, { FC, ReactElement } from 'react';

interface IProps {
  tabs: Array<{ name: string; display: boolean; }>;
  switchTabs: any;
}

const Navbar: FC<IProps> = ({tabs, switchTabs}): ReactElement => {

  return (
    <div style={{display: 'flex'}}>
      <div>
        <span>kyle johnson</span>
      </div>
      <div style={{marginLeft: '15px', display: 'flex', justifyContent: 'center'}}>
        <ul style={{margin: '0 5px'}}>
          {tabs.map((tab, idx) => {//@ts-ignore
            return <li onClick={switchTabs} style={{cursor: 'grab', display: 'inline', margin: '5px'}} key={idx + tab.name} data-name={tab.name}>{tab.name}</li>
            })}
        </ul>
      </div>
    </div>

  )

}

export default Navbar