import { Box, Button } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { useUser } from '@/lib/hooks';

import { useLogout } from './hooks';

export function Sidebar(): ReactElement {
  const [user] = useUser();
  const { route } = useRouter();
  const { logout } = useLogout();

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
    borderRightWidth: '0',
    overflow: 'auto',
    fontSize: '12px',
    fontFamily: 'verdana, arial, helvetica, sans-serif',
  };
  return (
    <Box
      style={{
        width: '100px',
        backgroundColor: 'rgb(247, 247, 247)',
        margin: 0,
      }}
    >
      <Box style={{ margin: 0 }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
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
            <div>
              <Link href={'/admin'}>Admin</Link>
            </div>
          </li>
          {user && (
            <li style={style}>
              <span>
                <Button onClick={logout}>Logout</Button>
              </span>
            </li>
          )}
          {process.env.NODE_ENV === 'development' && route === '/admin' && (
            <li style={style}>
              <Button
                onClick={() => {
                  axios({ url: '/api/seed', method: 'post', timeout: 10000 });
                }}
              >
                Seed
              </Button>
            </li>
          )}
        </ul>
      </Box>
    </Box>
  );
}
