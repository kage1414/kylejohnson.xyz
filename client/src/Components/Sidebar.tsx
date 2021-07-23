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
                    {/* Refactor this to React elements in future */}
                    <ul style={{display: 'flex', flexDirection: 'column'}}>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'
                        }}>
                            <span>
                                Full-Stack<br/>Developer
                            </span>
                        </li>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                                <a href={'mailto:kylejohnson92294@gmail.com'}>
                                    email:
                                </a>
                        </li>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                                <a href={'mailto:kylejohnson92294@gmail.com'}>
                                    kylejohnson<br/>92294<br/>@gmail.com
                                </a>
                        </li>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                            <span>
                                Indianapolis
                            </span>
                        </li>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                            <span>
                                Remote
                            </span>
                        </li>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                                <a href={'https://github.com/kage1414'}>
                                    github
                                </a>
                        </li>

                        <li style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 117,
                            margin: '10px 0 3px 12px',
                            border: 'rgb(204, 204, 204) 1px solid',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '5px',
                            borderTopLeftRadius: '5px',
                            overflow: 'auto',
                            fontSize: '14px'}}>
                                <a href={'https://www.linkedin.com/in/kyle-johnson-5737aa52/'}>
                                    linkedin
                                </a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }


}

export default Sidebar;