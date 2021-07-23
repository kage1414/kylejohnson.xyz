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

        const height: number = document.documentElement.offsetHeight > window.innerWidth ? document.documentElement.offsetHeight : window.innerWidth;

        this.setState({
            width: window.innerWidth,
            height: height
        })
    }

    render() {
        return (
            <div style={{width: '130px', height: this.state.height, backgroundColor: 'rgb(247, 247, 247)', margin: 0}}>
                <div style={{margin: 0}}>
                    <ul >

                        <li style={{
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            textAlign: 'left',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                                <a style={{
                                    paddingLeft: '10px',
                                    paddingTop: '9.6px',
                                    position: 'relative',
                                    fontSize: '10px'}}
                                    href={'mailto:kylejohnson92294@gmail.com'}>
                                    email:<br/>kylejohnson92294<br/>@gmail.com
                                </a>
                        </li>
                        
                        <li style={{
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid', 
                            backgroundColor: 'white', borderBottomLeftRadius: '5px', 
                            borderTopLeftRadius: '5px', 
                            textAlign: 'left', 
                            overflow: 'auto', 
                            fontSize: '14px'}}>
                            <span>
                                Location:<br/>Indianapolis<br/>Remote
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }


}

export default Sidebar;