import { FC, SetStateAction, Dispatch } from 'react';
import { useWindowWidth } from '@react-hook/window-size/throttled';
import { Box, Drawer } from '@mui/material';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

interface Props {
  height: number;
}

const SIDEBAR_MIN_WIDTH = 673;

export const Sidebar: FC<Props> = ({ height }: Props) => {
  const width = useWindowWidth();
  const style = {
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
    fontFamily: 'verdana, arial, helvetica, sans-serif',
  };
  return width > SIDEBAR_MIN_WIDTH ? (
    <Box
      style={{
        width: '100px',
        minHeight: height,
        backgroundColor: 'rgb(247, 247, 247)',
        margin: 0,
      }}
    >
      <Box style={{ margin: 0 }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <li style={style}>
            <span>
              Full-Stack
              <br />
              SWE
            </span>
          </li>

          <li style={style}>
            <a href={'mailto:kylejohnson92294@gmail.com'}>
              kylejohnson
              <br />
              92294
              <br />
              @gmail.com
            </a>
          </li>
          <li style={style}>
            <span>Indianapolis</span>
          </li>
          <li style={style}>
            <span>Remote</span>
          </li>
          <li style={style}>
            <a href={'https://github.com/kage1414'}>github</a>
          </li>
          <li style={style}>
            <a href={'https://www.linkedin.com/in/kylejohnson922/'}>linkedin</a>
          </li>
          <li style={style}>
            <Link to={'/admin'}>Admin</Link>
          </li>
        </ul>
      </Box>
    </Box>
  ) : (
    <></>
  );
};
