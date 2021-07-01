import React, { FC, ReactElement } from 'react';
import { Logo, Tab, List } from '../styled-components';

interface IProps {
  tabs: Array<{ name: string; display: boolean; }>;
}

const Navbar: FC<IProps> = ({tabs}): ReactElement => {

  return (
    <div>
      <Logo>kyle johnson</Logo>
      <List>
        {tabs.map((tab, idx) => (
          <Tab key={idx}>{tab.name}</Tab>
        ))}
      </List>
    </div>

  )

}

export default Navbar