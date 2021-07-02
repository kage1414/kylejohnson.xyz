import React, { Component } from 'react';
import Navbar from './Components/Navbar';

interface IProps {
}

interface IState {
  tabs: Array<{ name: string; display: boolean; }>;
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
      ]
    };
    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs(e: any) {
    console.log(e)
  }

  render() {
    return (
      <>
        <Navbar tabs={this.state.tabs} switchTabs={this.switchTabs} />
      </>
    )
  }
}

export default App;
