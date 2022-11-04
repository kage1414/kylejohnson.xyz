import { Component } from 'react';

interface IProps {}

interface IState {}

class Sidebar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: '100px',
          height: '100%',
          backgroundColor: 'rgb(247, 247, 247)',
          margin: 0,
        }}
      >
        <div style={{ margin: 0 }}>
          {/* Refactor this to React elements in future */}
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <li
              style={{
                minHeight: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 85,
                margin: '10px 0 3px 12px',
                border: 'rgb(204, 204, 204) 1px solid',
                backgroundColor: 'white',
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              <span>
                Full-Stack
                <br />
                SWE
              </span>
            </li>

            <li
              style={{
                minHeight: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 85,
                margin: '10px 0 3px 12px',
                border: 'rgb(204, 204, 204) 1px solid',
                backgroundColor: 'white',
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              <a href={'mailto:kylejohnson92294@gmail.com'}>
                kylejohnson
                <br />
                92294
                <br />
                @gmail.com
              </a>
            </li>

            <li
              style={{
                minHeight: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 85,
                margin: '10px 0 3px 12px',
                border: 'rgb(204, 204, 204) 1px solid',
                backgroundColor: 'white',
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              <span>Indianapolis</span>
            </li>

            <li
              style={{
                minHeight: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 85,
                margin: '10px 0 3px 12px',
                border: 'rgb(204, 204, 204) 1px solid',
                backgroundColor: 'white',
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              <span>Remote</span>
            </li>

            <li
              style={{
                minHeight: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 85,
                margin: '10px 0 3px 12px',
                border: 'rgb(204, 204, 204) 1px solid',
                backgroundColor: 'white',
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              <a href={'https://github.com/kage1414'}>github</a>
            </li>

            <li
              style={{
                minHeight: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 85,
                margin: '10px 0 3px 12px',
                border: 'rgb(204, 204, 204) 1px solid',
                backgroundColor: 'white',
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              <a href={'https://www.linkedin.com/in/kylejohnson922/'}>
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
