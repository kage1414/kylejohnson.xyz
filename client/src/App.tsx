import { Component } from 'react';
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
