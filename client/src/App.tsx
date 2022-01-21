import React, { FC, ReactElement, useState } from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';

// eslint-disable-next-line
interface IProps {
}

const App: FC<IProps> = (): ReactElement => {

  const [selectedTab, setSelectedTab] = useState('');
  const [displaySidebar, setDisplaySidebar] = useState(window.innerWidth >= 443);

  const switchTabs = (e: any) => {
    setSelectedTab(e.target.dataset.name);
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth < 443 && displaySidebar) {
      setDisplaySidebar(false);
    } else if (window.innerWidth >= 443 && !displaySidebar) {
      setDisplaySidebar(true);
    }
  });

  return (
    <div>
      <div style={{ backgroundColor: 'rgb(206, 227, 248)' }}>
        <Navbar
          switchTabs={switchTabs}
          selectedTab={selectedTab} />
      </div>
      <div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          {displaySidebar &&
            <Sidebar />
          }
          <Body />
        </div>
      </div>
    </div>
  );

};

export default App;
