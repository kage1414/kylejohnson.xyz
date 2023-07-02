import { Box, Button, Grid, TextField } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';

export function Login(): ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {}, [username, password]);

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minWidth='25vw'
      minHeight='25vh'
    >
      <Grid>
        <Grid>
          <TextField
            id='username-input'
            label='username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <TextField
            id='password-input'
            label='password'
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Button>Login</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
