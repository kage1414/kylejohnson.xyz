import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { FormEventHandler, MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ComponentProps } from './HomePage';

export function SignupPage({ user, mutateUser }: ComponentProps) {
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const { key } = useParams();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async function (e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      fullname: e.currentTarget.fullname.value,
      email: e.currentTarget.email.value,
      key,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    if (body.password.length < Number(import.meta.env.NEXT_PUBLIC_MIN_CHARS)) {
      setErrorMsg(
        `Password must be at least ${
          import.meta.env.NEXT_PUBLIC_MIN_CHARS
        } characters long`
      );
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    setLoading(false);

    if (res.status === 201) {
      const userObj = await res.json();
      // set user to useSWR state
      mutateUser(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) navigate('/admin');
  }, [navigate, user]);

  return (
    <Box padding={2}>
      <Box>
        <Typography>Signup to kylejohnson.xyz</Typography>
      </Box>
      {errorMsg && <Typography color='error'>{errorMsg || ''}</Typography>}
      <Box sx={{ m: 1, width: '25ch' }}>
        <form onSubmit={onSubmit}>
          <TextField sx={{ marginBottom: 1 }} label='Name' id='fullname' />
          <TextField sx={{ marginBottom: 1 }} label='Username' id='username' />
          <TextField sx={{ marginBottom: 1 }} label='Email' id='email' />
          <FormControl variant='outlined' sx={{ marginBottom: 1 }}>
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
          <FormControl variant='outlined' sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor='outlined-adornment-password'>
              Repeat Password
            </InputLabel>
            <OutlinedInput
              id='rpassword'
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
              label='Repeat Password'
            />
          </FormControl>
          <Box>
            <Button type='submit'>
              {loading ? <CircularProgress /> : 'Sign Up'}
            </Button>
          </Box>
          <Link to='/login'>I already have an account</Link>
        </form>
      </Box>
    </Box>
  );
}
