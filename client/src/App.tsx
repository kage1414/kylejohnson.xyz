import { useEffect, useState, Component } from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { useCookies } from 'react-cookie';

interface IProps {
}

interface IState {
  tabs: Array<{ name: string; display: boolean; }>;
  selectedTab: { name: string; display: boolean; };
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    let selectedTabCookie: any;
    let tabs = [
      { name: 'technical skills', display: true },
      { name: 'applications', display: false },
      { name: 'experience', display: false },
      { name: 'education', display: false },
      { name: 'general', display: false }
    ]
    
    let cookies: Array<string> = document.cookie.split('; ');

    for (let ele of cookies) {
      let kv: Array<string> = ele.split('=');
      if (kv[0] === 'lastOpenTab') {
        selectedTabCookie = JSON.parse(kv[1]);
        for (let tab of tabs) {
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
      selectedTab: selectedTabCookie || { name: 'technical skills', display: true }
    };
    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs(e: any) {
    const idx: number = Number(e.target.dataset.idx);
    let tabs = this.state.tabs;
    let selectedTab = this.state.selectedTab;
    tabs.forEach((tab, i) => {
      if (i === idx) {
        tab.display = true;
        selectedTab = tab;
      } else {
        tab.display = false;
      }
    })

    document.cookie = `lastOpenTab=${JSON.stringify(selectedTab)}`;

    this.setState({
      tabs,
      selectedTab
    })

  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'rgb(206, 227, 248)'}}>
          <Navbar tabs={this.state.tabs} switchTabs={this.switchTabs} />
        </div>
        <div>
          <Body selectedTab={this.state.selectedTab}/>
        </div>
      </div>
    )
  }
}

export default App;
