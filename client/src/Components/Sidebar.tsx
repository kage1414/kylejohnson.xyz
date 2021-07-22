import { Component } from 'react';

interface IProps {
}

interface IState {
    height: number;
    width: number;
    documentHeight: number;
  }

class Sidebar extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            documentHeight: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {

        const height: number = document.documentElement.offsetHeight < window.innerWidth ? document.documentElement.offsetHeight : window.innerWidth;

        this.setState({
            width: window.innerWidth,
            height: height
        })
    }

    render() {
        return (
            <div style={{width: '130px', height: this.state.height, backgroundColor: 'rgb(247, 247, 247)'}}>
                Hello
            </div>
        );
    }


}

export default Sidebar;