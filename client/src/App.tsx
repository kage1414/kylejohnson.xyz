import { Component } from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

interface IProps {
}

interface IState {
  tabs: Array<{ name: string; display: boolean; }>;
  selectedTab: { name: string; display: boolean; };
  windowWidth: number;
  mobile: boolean;
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    let selectedTabCookie: any;
    let tabs = [
      { name: 'technical_skills', display: true },
      { name: 'applications', display: false },
      { name: 'experience', display: false },
      { name: 'education', display: false },
      // { name: 'general', display: false }
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
      selectedTab: selectedTabCookie || { name: 'technical_skills', display: true },
      windowWidth: window.innerWidth,
      mobile: false
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

  componentDidMount() {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      console.log(window.outerWidth)
      this.setState({
        windowWidth: window.innerWidth
      })
    })
    window.addEventListener('scroll', () => {
      console.log(window.innerWidth)
      console.log(window.outerWidth)
    })
  }

  mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);

    this.setState({
      mobile: check
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar windowWidth={this.state.windowWidth} tabs={this.state.tabs} switchTabs={this.switchTabs} />
        </div>
        <div>
          <Body mobile={this.state.mobile} windowWidth={this.state.windowWidth} selectedTab={this.state.selectedTab}/>
        </div>
      </div>
    )
  }
}

export default App;
