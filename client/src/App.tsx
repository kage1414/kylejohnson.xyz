import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

// eslint-ignore
interface IProps {
  hello?: string;
}

interface IState {
  tabs: Array<{ name: string; display: boolean; }>;
  selectedTab: { name: string; display: boolean; };
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    let selectedTabCookie: any;
    const tabs = [
      {
        name: 'experience',
        display: true
      },
      {
        name: 'technical skills',
        display: false
      },
      {
        name: 'applications',
        display: false
      },
      {
        name: 'education',
        display: false
      },
      {
        name: 'general',
        display: false
      }
    ];

    const cookies: Array<string> = document.cookie.split('; ');

    for (const ele of cookies) {
      const kv: Array<string> = ele.split('=');
      if (kv[0] === 'lastOpenTab') {
        selectedTabCookie = JSON.parse(kv[1]);
        for (const tab of tabs) {
          if (tab.name === selectedTabCookie.name) {
            tab.display = true;
          } else {
            tab.display = false;
          }
        }
      }
    }

    this.state = {
      tabs,
      selectedTab: selectedTabCookie || {
        name: 'experience',
        display: true
      }
    };
    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs(e: any) {
    const idx = Number(e.target.dataset.idx);
    const { tabs } = this.state;
    let { selectedTab } = this.state;
    tabs.forEach((tab, i) => {
      if (i === idx) {
        tab.display = true;
        selectedTab = tab;
      } else {
        tab.display = false;
      }
    });

    document.cookie = `lastOpenTab=${JSON.stringify(selectedTab)}`;

    this.setState({
      tabs,
      selectedTab
    });

  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'rgb(206, 227, 248)' }}>
          <Navbar tabs={this.state.tabs}
            switchTabs={this.switchTabs} />
        </div>
        <div>
          <Body selectedTab={this.state.selectedTab} />
        </div>
      </div>
    );
  }
}

export default App;
