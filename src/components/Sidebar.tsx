import {
  Box,
  Button,
  Dialog,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

import { useLogout } from './hooks';

interface Props {
  mutateUser: any;
  user: any;
}

export function Sidebar({ mutateUser, user }: Props): ReactElement {
  const { route } = useRouter();
  const [logout] = useLogout();
  const [inviteOpen, setInviteOpen] = useState(false);

  const onInviteOpen = () => {
    setInviteOpen(true);
  };

  const onInviteSubmit = () => {
    setInviteOpen(false);
  };

  const onLogout = () => {
    mutateUser('/api/logout', undefined);
    logout();
  };

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
              <Link href={'/admin'}>admin</Link>
            </div>
          </li>
          {user?.username && (
            <>
              <li style={style}>
                <span>
                  <Button onClick={onLogout}>{'Logout'}</Button>
                </span>
              </li>
              {route === '/admin' && (
                <>
                  <li style={style}>
                    <Button
                      onClick={() => {
                        axios({
                          url: '/api/snapshot',
                          method: 'post',
                          timeout: 10000,
                        });
                      }}
                    >
                      Snapshot
                    </Button>
                  </li>
                  <li style={style}>
                    <span>
                      <Button onClick={onInviteOpen}>{'Invite'}</Button>
                    </span>
                  </li>
                  {process.env.NODE_ENV === 'development' && (
                    <li style={style}>
                      <Button
                        onClick={() => {
                          axios({
                            url: '/api/seed',
                            method: 'post',
                            timeout: 10000,
                          });
                        }}
                      >
                        Seed
                      </Button>
                    </li>
                  )}
                </>
              )}
            </>
          )}
        </ul>
      </Box>
      <Dialog open={inviteOpen}>
        <Paper>
          <Box
            width={'30vw'}
            height={'20vh'}
            display='flex'
            alignItems={'center'}
            flexDirection='column'
            justifyContent={'space-around'}
          >
            <Box>
              <Typography>Send invite</Typography>
            </Box>
            <Box>
              <TextField />
            </Box>
            <Box>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setInviteOpen(true);
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Dialog>
    </Box>
  );
}
