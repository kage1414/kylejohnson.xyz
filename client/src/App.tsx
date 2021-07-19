import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

interface IProps {
}

interface IState {
  tabs: Array<{ name: string; display: boolean; }>;
  selectedTab: { name: string; display: boolean; };
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      tabs: [
        { name: 'technical skills', display: true },
        { name: 'projects', display: false },
        { name: 'experience', display: false },
        { name: 'education', display: false },
        { name: 'general', display: false }
      ],
      selectedTab: { name: 'technical skills', display: true }
    };
    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs(e: any) {
    const tab: string = e.target.dataset.name;
    for (let i = 0; i < this.state.tabs.length; i++) {
      const currentTab = this.state.tabs[i];
      if (tab === currentTab.name) {
        this.setState({
          selectedTab: currentTab
        });
        break;
      }
    }

  }

  render() {
    return (
      <div style={{margin: '15px'}}>
        <Navbar tabs={this.state.tabs} switchTabs={this.switchTabs} />
        <Body selectedTab={this.state.selectedTab}/>
      </div >
    )
  }
}

export default App;
