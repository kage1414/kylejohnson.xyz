import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import Router from 'next/router';
import { FormEventHandler, MouseEvent, useEffect, useState } from 'react';

import { useUser } from './hooks';

export const LoginPage = function () {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async function (e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try better!');
    }
  };

  useEffect(() => {
    // redirect to home if user is authenticated
    // if (user) Router.push('/');
  }, [user]);

  return (
    <Box padding={2}>
      <Box>
        <Typography>Login to kylejohnson.xyz</Typography>
      </Box>
      {errorMsg && <Typography color='error'>{errorMsg || ''}</Typography>}
      <Box sx={{ m: 1, width: '25ch' }}>
        <form onSubmit={onSubmit}>
          <TextField sx={{ marginBottom: 1 }} label='Username' id='username' />
          <FormControl variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <Box>
            <Button type='submit'>Login</Button>
          </Box>
        </form>
        <Box></Box>
      </Box>
    </Box>
  );
};
